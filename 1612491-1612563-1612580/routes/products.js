var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/dien-thoai', productsController.dienthoai);
router.get('/phu-kien-dien-thoai', productsController.phukien);
router.get('/cases', productsController.cases);
router.get('/screen-protector', productsController.screenprotector);
router.get('/power-bank', productsController.powerbank);
router.get('/tablets', productsController.tablets);
router.get('/watch', productsController.watch);
router.get('/smart-home', productsController.smarthome);
router.get('/product2', productsController.index2);

module.exports = router;
