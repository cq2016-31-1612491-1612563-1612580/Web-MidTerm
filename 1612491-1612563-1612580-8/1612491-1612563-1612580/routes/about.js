var express = require('express');
var router = express.Router();
var aboutController = require('../controllers/aboutController');

/* GET users listing. */
router.get('/', aboutController.index);

module.exports = router;