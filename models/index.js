const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/MindWorkers', {
  keepAlive: true,
  useNewUrlParser: true,
});
module.exports.Employee = require('./employee');
module.exports.Project = require('./project');
