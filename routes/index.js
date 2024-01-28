const express = require('express');
const router = express.Router();
const passport = require('passport');
const employee = require('../controller/employee');

router.get('/', employee.SignInPage);
router.post('/login', passport.authenticate('local', { failureRedirect: '/' }), employee.SignIn);
router.get('/signIn', employee.createSessionPage);
router.get('/destroy_session' , employee.SignOut);
router.post('/create_session', employee.createSession);
router.use('/employee', require('./employeeDashboard'));
router.use('/student', require('./interview'));
router.use('/result', require('./result'));
router.use('/job', require('./jobs'));

module.exports = router; 