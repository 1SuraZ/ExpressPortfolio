/*

  Student Name: Vishal Thapa
  Student ID: 301271689
  Date: 2023-09-29

*/


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Your Portfolio - Contact Me' });
});

/* GET projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Your Portfolio - Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Your Portfolio - Services' });
});

module.exports = router;