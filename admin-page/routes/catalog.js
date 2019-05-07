var express = require('express');
var router = express.Router();

//require for controller
var charts_controller = require('../controllers/chartsController');
var compose_controller = require('../controllers/composeController');
var home_controller = require('../controllers/homeController');
var forgot_controller = require('../controllers/forgotController');
var inbox_controller = require('../controllers/inboxController');
var login_controller = require('../controllers/loginController');
var quanlydondathang_controller = require ('../controllers/QuanLyDonDatHangController');
var quanlysanpham_controller = require('../controllers/QuanLySanPhamController');
var quanlytaikhoan_controller = require('../controllers/QuanLyTaiKhoanController');
var signup_controller = require('../controllers/signupController');
var top10_controller = require('../controllers/Top10Controller');
var widgets_controller = require('../controllers/widgetsController');


/* GET home page. */
/*
router.post('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
*/

/*get catalog home page*/
router.get('/',home_controller.index);
router.get('/index',home_controller.index);

router.get('/charts',home_controller.charts);
router.get('/compose',home_controller.compose);
router.get('/forgot',home_controller.forgot);
router.get('/inbox',home_controller.inbox);
router.get('/login',home_controller.login);
router.get('/QuanLyDonDatHang',home_controller.QuanLyDonDatHang);
router.get('/QuanLySanPham',home_controller.QuanLySanPham);
router.get('/QuanLyTaiKhoan',home_controller.QuanLyTaiKhoan);
router.get('/signup',home_controller.signup);
router.get('/Top10',home_controller.Top10);
router.get('/widgets',home_controller.widgets);
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
