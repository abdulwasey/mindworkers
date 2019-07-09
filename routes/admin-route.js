const express = require('express');

const router = express.Router();
const db = require('../models');
// var cloudinary = require('cloudinary');


// cloudinary.config({
//     cloud_name: 'saikiran2211',
//     api_key: '325518163817134',
//     api_secret: 'EUrowRf2-p9cmCy4UMGb3NHhPPU'
// });

// root route


router.get('/', (req, res) => {
  db.Project.find()
  .then(function (projects) {   
    res.render('dashboard', {
      projects,
    });
  })
  .catch(function (err) {
    res.render('error-view', { err: err });
  });
});
router.get('/notification', (req, res) => {
  res.render('notifications');
});
router.get('/table', (req, res) => {
  res.render('table');
});

router.get('/template', (req, res) => {
  res.render('template');
});
router.get('/typography', (req, res) => {
  res.render('typography');
});
router.get('/upgrade', (req, res) => {
  res.render('upgrade');
});
router.get('/user', (req, res) => {
  res.render('user');
});
router.get('/icons', (req, res) => {
  res.render('user');
});


module.exports = router;
