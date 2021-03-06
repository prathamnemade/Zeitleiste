var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

// var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var verifyEmail=require('../controllers/verifyEmail');
var registration=require('../controllers/registration');
var avatar=require('../controllers/avatar')
// profile
// router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.get('/verify', verifyEmail.verifyEmail);
router.post('/register', registration.register);
router.post('/checkRegister', ctrlAuth.checkRegister)
router.post('/login', ctrlAuth.login);

//avatar
router.post('/avatarExists',avatar.checkAvatarExists)
router.post('/avatarData',avatar.getDataforSetAvatar)
module.exports = router;
