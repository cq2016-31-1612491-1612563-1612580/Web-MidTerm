const express = require('express');
const router = express.Router();
const passport = require('passport');
const loginController = require('../controllers/loginController');

router.post('/signupForm', loginController.signupPost);


router.post('/loginForm', passport.authenticate('local', {
   failureRedirect: '/log',
   successRedirect: '/'
}));

router.get('/', loginController.index);
router.get('/detail', loginController.detail);
router.post('/detail', loginController.saveDetail);

router.get('/logout', loginController.logout);

module.exports = router;