const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');


const EmployeeSchema = new mongoose.Schema({

  name: String,
  email: String,
  salary: Number,
  contact: String,
  address: String,
  skills: [{
    skill_name: String,
    proficiency: String,
  }],
  experience: String,
  designation: String,
  doj: Date,
  dob: Date,
  image: String,
  image_id: String,
  Leave: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Leaves',
  }],
  employee_id: String,
  social_media: [{
    platform: String,
    url: String,
  }],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "tasks"
  }],
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,


});


EmployeeSchema.plugin(passportLocalMongoose);

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
