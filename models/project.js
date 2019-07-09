const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({

  title: {
    type: String,
    required: 'Title cannot be blank',
  },
  type: {
    type: String,
    required: 'Type cannot be blank',
  },
  status: {
    type: String,
    default: 'Ongoing',
  },
  client_name: {
    type: String,
    required: 'Client name cannot be blank',
  },
  client_email: {
    type: String,
    required: 'Client email cannot be blank',
  },
  client_contact: {
    type: String,
    required: 'Client contact cannot be blank',
  },
  client_company: String,
  technologies_used: String,
  estimate: String,
  deadline: Date,
  manager: String,
  description: String,
  git_link: String,
  heroku_link: String,
  employees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  }],
  issues: [{
    title: String,
    description: String,
    label: [{
      title: String,
      color: String,
    }],
  }],
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tasks'
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
