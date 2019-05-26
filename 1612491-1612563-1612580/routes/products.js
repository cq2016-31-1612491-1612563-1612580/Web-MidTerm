var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/product1', productsController.index1);
router.get('/product2', productsController.index2);

module.exports = router;