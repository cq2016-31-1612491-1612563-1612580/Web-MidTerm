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
router.get('/QuanLySanPham',quanlysanpham_controller.index);
router.get('/addSanPham',quanlysanpham_controller.add);
router.post('/addSanPham',quanlysanpham_controller.addPost);
router.get('/QuanLyTaiKhoan',home_controller.QuanLyTaiKhoan);
router.get('/signup',home_controller.signup);
router.get('/Top10',home_controller.Top10);
router.get('/widgets',home_controller.widgets);
module.exports = router;
