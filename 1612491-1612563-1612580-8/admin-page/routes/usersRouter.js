var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/list', usersController.list);
router.get('/detail', usersController.detail);

module.exports = router;
