var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* Other page */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/charts', function(req, res, next) {
  res.render('charts', { title: 'Charts' });
});

router.get('/compose', function(req, res, next) {
  res.render('compose', { title: 'Compose' });
});

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'Inbox' });
});

router.get('/login', function(req, res, next) {
  res.render('Login', { title: 'Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.get('/widgets', function(req, res, next) {
  res.render('widgets', { title: 'Widgets' });
});
module.exports = router;
