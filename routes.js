const express = require('express');
const router = express.Router();

// Render HTML pages
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

// Serve the PDF resume
router.get('/resume', (req, res) => {
  res.download('resume.pdf'); // Make sure 'resume.pdf' is in your project root
});

module.exports = router;
