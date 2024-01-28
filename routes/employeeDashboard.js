const express = require('express');
const router = express.Router();
const employeeDashboard = require('../controller/student');

router.get('/dashboard', employeeDashboard.dashboard)
router.get('/student', employeeDashboard.addStudentPage);
router.post('/addstudent', employeeDashboard.addStudent);
router.get('/download' , employeeDashboard.downloadData);

module.exports = router;