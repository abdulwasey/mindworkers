const mongoose = require("mongoose");
const Project = require("./project");
const Employee = require("./employee");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title cannot be blank',
        maxlength: 160
    },
    description: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
    },
    status:{
        type:String,
        default:'Pending'
    }
},
    {
        timestamps: true
    });

taskSchema.pre('remove', async function (next) {
    try {
        let user = await Employee.findById(this.employee);
        user.tasks.remove(this.id);
        await user.save();
        let project = await Project.findById(this.project);
        project.tasks.remove(this.id);
        await project.save();
        return next();
    } catch (error) {
        return next(error);
    }
})
const Task = mongoose.model('Task', taskSchema)
module.exports = Task;