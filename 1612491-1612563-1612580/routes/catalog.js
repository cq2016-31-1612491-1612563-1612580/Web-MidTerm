var express = require('express');
var router = express.Router();

//require for controller
var about_controller = require('../controllers/aboutController');
var cart_controller = require('../controllers/cartController');
var home_controller = require('../controllers/homeController');
var product_controller = require('../controllers/productController');
var productinstance_controller = require('../controllers/productinstanceController');


/* GET home page. */
/*
router.post('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
*/

/*get catalog home page*/
router.get('/',home_controller.index);
router.post('/',home_controller.index);
router.get('/index',home_controller.index);
router.post('/index',home_controller.index);
router.get('/about',home_controller.about);
router.post('/about',home_controller.about);
router.get('/contact',home_controller.contact);
router.post('/contact',home_controller.contact);
router.get('/checkout',home_controller.checkout);
router.post('/checkout', home_controller.checkout);
router.get('/faqs',home_controller.faqs);
router.get('/help',home_controller.help);
router.get('/payment',home_controller.payment);
router.get('/privacy',home_controller.privacy);
router.get('/product',home_controller.product);
router.post('/product',home_controller.product);
router.get('/product2',home_controller.product2);
router.post('/product2',home_controller.product2);
router.get('/single',home_controller.single);
router.post('/single',home_controller.single);
router.get('/single2',home_controller.single2);
router.post('/single2',home_controller.single2);
router.get('/terms',home_controller.terms);
/*
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'index' });
});

router.post('/index', function(req, res, next) {
    res.render('index', { title: 'index' });
});
*/
/*ĐÂY LÀ PHẦN ROUTER*/
/*
router.get('/checkout', function(req, res) {
    res.render('checkout', {title: 'Checkout'});
});

router.get('/checkout', function(req, res, next) {
    res.render('checkout', {title: 'checkout'});
});

router.post('/checkout', function(req, res, next) {
    res.render('checkout', { title: 'checkout' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res) {
    res.render('contact', { title: 'contact' });
});

router.get('/faqs', function(req, res) {
    res.render('faqs', { title: 'faqs' });
});


router.get('/help', function(req, res) {
    res.render('help', { title: 'help' });
});

router.get('/payment', function(req, res) {
    res.render('payment', { title: 'payment' });
});

router.get('/privacy', function(req, res) {
    res.render('privacy', { title: 'privacy' });
});

router.get('/product', function(req, res) {
    res.render('product', { title: 'product' });
});

router.get('/product2', function(req, res) {
    res.render('product2', { title: 'product2' });
});

router.get('/single', function(req, res) {
    res.render('single', { title: 'single' });
});

router.get('/single2', function(req, res) {
    res.render('single2', { title: 'single2' });
});

router.get('/terms', function(req, res) {
    res.render('terms', { title: 'terms' });
});

router.get('/admin/', function(req, res, next) {
    res.render('Admin', { title: 'terms' });
});
*/
module.exports = router;
