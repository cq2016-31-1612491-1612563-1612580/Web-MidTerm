var express = require('express');
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

// //Get home page
// router.get('/', function (req,res) {
//   res.redirect('/catalog');
// });

// router.post('/', function (req,res) {
//   res.redirect('/catalog');
// });

// router.get('/index', function (req,res,next) {
//   res.redirect('/catalog');
// });

// router.post('/index', function (req,res,next) {
//   res.redirect('/catalog');
// });

// router.get('/contact', function (req,res,next) {
//   res.redirect('/catalog/contact');
// });

// router.post('/contact', function (req,res,next) {
//   res.redirect('/catalog/contact');
// });

// router.get('/checkout', function (req,res) {
//   res.redirect('/catalog/checkout');
// });

// router.post('/checkout', function (req,res) {
//   res.redirect('/catalog/checkout');
// });

// router.get('/faqs', function (req,res) {
//   res.redirect('/catalog/faqs');
// });

// router.get('/help', function (req,res) {
//   res.redirect('/catalog/help');
// });

// router.get('/payment', function (req,res) {
//   res.redirect('/catalog/payment');
// });

// router.get('/privacy', function (req,res) {
//   res.redirect('/catalog/privacy');
// });

// router.get('/single', function (req,res) {
//   res.redirect('/catalog/single');
// });

// router.post('/single', function (req,res) {
//   res.redirect('/catalog/single');
// });

// router.get('/single2', function (req,res) {
//   res.redirect('/catalog/single2');
// });

// router.post('/single2', function (req,res) {
//   res.redirect('/catalog/single2');
// });

// router.get('/terms', function (req,res) {
//   res.redirect('/catalog/terms');
// });

// router.get('/singlephone2', function (req,res) {
//   res.redirect('/catalog/singlephone2');
// });

// router.post('/singlephone2', function (req,res) {
//   res.redirect('/catalog/singlephone2');
// });

module.exports = router;
