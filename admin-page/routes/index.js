var express = require('express');
var router = express.Router();

//Get home page
router.get('/', function (req,res) {
  res.redirect('/catalog');
});

router.get('/index', function (req,res,next) {
  res.redirect('/catalog');
});

router.get('/about', function (req,res) {
  res.redirect('/catalog/about');
});

router.get('/contact', function (req,res,next) {
  res.redirect('/catalog/contact');
});

router.get('/checkout', function (req,res) {
  res.redirect('/catalog/checkout');
});

router.get('/faqs', function (req,res) {
  res.redirect('/catalog/faqs');
});

router.get('/help', function (req,res) {
  res.redirect('/catalog/help');
});

router.get('/payment', function (req,res) {
  res.redirect('/catalog/payment');
});

router.get('/privacy', function (req,res) {
  res.redirect('/catalog/privacy');
});

router.get('/product', function (req,res) {
  res.redirect('/catalog/product');
});

router.get('/product2', function (req,res) {
  res.redirect('/catalog/product2');
});

router.get('/single', function (req,res) {
  res.redirect('/catalog/single');
});

router.get('/single2', function (req,res) {
  res.redirect('/catalog/single2');
});

router.get('/terms', function (req,res) {
  res.redirect('/catalog/terms');
});

module.exports = router;