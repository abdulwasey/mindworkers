const db = require('../models');


exports.getProject = function (req, res) {
  db.Project.find()
    .then(function (projects) {
      res.render('./project/index', {
        projects
      });
    })
    .catch(function (err) {
      res.render('error-view', { err: err });
    });
};

exports.editProject = function (req, res) {
  db.Project.findById(req.params.id)
    .then(function (project) {
      res.render('./project/editProject', {
        project
      });
    })
    .catch(function (err) {
      res.render('error-view', { err: err });
    });
};

exports.showProject = function (req, res) {
  db.Project.findById(req.params.id)
    .then(function (project) {
      res.render('./project/showProject', {
        project
      });
    })
    .catch(function (err) {
      res.render('error-view', { err: err });
    });
};

exports.createProject = function (req, res) {
  console.log(req.body);
  db.Project.create(req.body)
  .then(function(){
    res.redirect('/dashboard/project');
  }).catch(function (err) {
    res.send(err);
  });
};

exports.updateProject = function (req, res) {
  db.Project.findByIdAndUpdate( req.params.id, req.body)
  .then(function(data) {
    console.log(data);
    res.redirect('/dashboard/project');
  })
  .catch(function(err) {
    res.send(err);
  });
   
};

module.exports = exports;
