var express = require('express');
const passport = require('passport');
var router = express.Router();

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

router.get('/signup', home_controller.signupGet);
router.post('/signup', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signup'
  }));

//to do forgot password by email
router.get('/verify/:permaink/:token', function (req, res) {
    var permalink = req.params.permaink;
    var token = req.params.token;

    User.findOne({'local.permalink': permalink}, function (err, user) {
        if (user.local.verify_token == token) {
            console.log('that token is correct! Verify the user');

            User.findOneAndUpdate({'local.permalink': permalink}, {'local.verified': true}, function (err, resp) {
                console.log('The user has been verified!');
            });

            res.redirect('/signup');
        } else {
            console.log('The token is wrong! Reject the user. token should be: ' + user.local.verify_token);
        }
    });
});

router.get('/recovery', home_controller.recovery);


module.exports = router;
