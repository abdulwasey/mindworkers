const db = require('../models');

exports.createTask = async function (req, res, next) {
    try {
        let task = await db.Task.create({
            text: req.body.text,
            user: req.params.id
        });
        let foundProject = await db.Project.findById(req.params.id);
        foundProject.task.push(task.id);
        await foundProject.save();

        let foundEmployee = await db.Employee.findById(req.params.id);
        foundEmployee.task.push(task.id);
        await foundEmployee.save();

        await db.Task.findById(task._id).populate("project", {
            title: true,
            type: true
        });

        let foundTask = await db.Task.findById(task._id).populate("employee", {
            name: true,
            image_id: true
        });
        return res.status(200).json(foundTask);
    } catch (error) {
        return next(error);
    }
};

exports.showTasks = async function (req, res, next) {
    try {
        let tasks = await db.Task.find(req.params.id)
          .sort({ createdAt: "desc" });
          
        return res.status(200).json(tasks);
      } catch (err) {
        return next(err);
      }
};


exports.getTask = async function (req, res, next) {
    try {
        let task = await db.Task.findById(req.params.id);
        return res.status(200).json(task);
    } catch (error) {
        return next(error);
    }
};

exports.deleteTask = async function (req, res, next) {
    try {
        let foundMessage = await db.Message.findById(req.params.message_id);
        await foundMessage.remove();
        return res.status(200).json(foundMessage);
    } catch (error) {
        return next(error);
    }
};

module.exports = exports;
