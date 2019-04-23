var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

router.post('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});

/*ĐÂY LÀ PHẦN ROUTER*/

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

module.exports = router;
