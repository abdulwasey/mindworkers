const express = require('express');
const router = express.Router();
const projectHandler = require('../handlers/project');
const taskHandler= require('../handlers/task');

router.route('/').get(projectHandler.getProject);

router.get("/add", (req, res) => { res.render('./project/createProject'); });

router.route('/add')
    .post(projectHandler.createProject);

router.route('/show/:id')
    .get(projectHandler.showProject);

router.route('/edit/:id')
    .get(projectHandler.editProject)
    .put(projectHandler.updateProject);

router.route('/tasks/:id')
    .get(taskHandler.getTasks)
    .put(taskHandler.updateTask)
    .delete(taskHandler.deleteTask);


module.exports = router;