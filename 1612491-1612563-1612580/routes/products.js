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
router.get('/laptops', productsController.laptops);
router.get('/hdd', productsController.hdd);
router.get('/printer', productsController.printer);
router.get('/laptop-accessories', productsController.laptopaccessories);
router.get('/tv', productsController.tv);
router.get('/headphones', productsController.headphones);
router.get('/speakers', productsController.speakers);
router.get('/camera', productsController.camera);
router.get('/camera-accessories', productsController.cameraaccessories);
router.get('/consoles', productsController.consoles);
router.get('/may-lanh', productsController.maylanh);
router.get('/tu-lanh', productsController.tulanh);
router.get('/may-giat', productsController.maygiat);

module.exports = router;
