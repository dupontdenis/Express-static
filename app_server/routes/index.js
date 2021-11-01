const express = require('express');
const router = express.Router();
const ctrlCourses = require('../controllers/courses');

router.get('/', ctrlCourses.coursesReadAll);
router.get('/HTML', ctrlCourses.coursesReadHTML);
router.get('/CSS', ctrlCourses.coursesReadCSS);

module.exports = router;