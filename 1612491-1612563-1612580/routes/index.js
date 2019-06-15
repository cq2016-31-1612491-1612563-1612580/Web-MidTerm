var express = require('express');
const passport = require('passport');
const {dbs} = require('../dbs');
var router = express.Router();
var User = require('../models/user')
var home_controller = require('../controllers/homeController');


router.get('/',home_controller.index);
router.post('/',home_controller.index);
router.get('/index',home_controller.index);
router.post('/index',home_controller.index);
router.get('/contact',home_controller.contact);
router.post('/contact',home_controller.contact);
router.get('/checkout',home_controller.checkout);
router.post('/checkout', home_controller.checkout);
router.get('/faqs',home_controller.faqs);
router.get('/help',home_controller.help);
router.get('/payment',home_controller.payment);
router.get('/privacy',home_controller.privacy);
router.get('/single',home_controller.single);
router.post('/single',home_controller.single);
router.get('/single2',home_controller.single2);
router.post('/single2',home_controller.single2);
router.get('/terms',home_controller.terms);
router.get('/singlephone2',home_controller.singlephone2);
router.post('/singlephone2',home_controller.singlephone2);

router.get('/register', home_controller.registerGet);
router.post('/register', home_controller.registerPost);

router.get('/login', home_controller.signupGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

router.get('/recovery', home_controller.recovery);
router.post('/recovery', home_controller.recoveryPost);
router.get('/recoveryPass',home_controller.recoveryPass);
router.post('/recoveryPass',home_controller.recoveryPassPost )
router.get('/verify', home_controller.verify);
router.post('/verify', home_controller.verifyPost);

module.exports = router;
