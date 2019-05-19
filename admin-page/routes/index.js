var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req,res) {
  res.redirect('/catalog');
});

router.get('/index', function (req,res,next) {
  res.redirect('/catalog');
});

router.get('/charts', function (req,res) {
  res.redirect('/catalog/charts');
});

router.get('/compose', function (req,res,next) {
  res.redirect('/catalog/compose');
});

router.get('/forgot', function (req,res) {
  res.redirect('/catalog/forgot');
});

router.get('/inbox', function (req,res) {
  res.redirect('/catalog/inbox');
});

router.get('/login', function (req,res) {
  res.redirect('/catalog/login');
});

router.get('/QuanLyDonDatHang', function (req,res) {
  res.redirect('/catalog/QuanLyDonDatHang');
});

router.get('/QuanLySanPham', function (req,res) {
  res.redirect('/catalog/QuanLySanPham');
});

router.get('/QuanLySanPham', function (req,res) {
  res.redirect('/catalog/addSanPham');
});

router.get('/QuanLyTaiKhoan', function (req,res) {
  res.redirect('/catalog/QuanLyTaiKhoan');
});

router.get('/signup', function (req,res) {
  res.redirect('/catalog/signupController');
});

router.get('/Top10', function (req,res) {
  res.redirect('/catalog/Top10');
});

router.get('/widgets', function (req,res) {
  res.redirect('/catalog/widgets');
});

module.exports = router;
