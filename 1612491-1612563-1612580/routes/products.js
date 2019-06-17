var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/dien-thoai', productsController.dienthoai);
//router.post('/single', productsController.dienthoaiPost);

router.get('/dien-thoai/single', productsController.single);
//router.post('/single', productsController.singlePost)

router.get('/phu-kien-dien-thoai', productsController.phukien);
router.get('/phu-kien-dien-thoai/single', productsController.single);

router.get('/cases', productsController.cases);
router.get('/cases/single', productsController.single);

router.get('/screen-protector', productsController.screenprotector);
router.get('/screen-protector/single', productsController.single);

router.get('/power-bank', productsController.powerbank);
router.get('/power-bank/single', productsController.single);

router.get('/tablets', productsController.tablets);
router.get('/tablets/single', productsController.single);

router.get('/watch', productsController.watch);
router.get('/watch/single', productsController.single);

router.get('/laptops', productsController.laptops);
router.get('/laptops/single', productsController.single);

router.get('/hdd', productsController.hdd);
router.get('/hdd/single', productsController.single);

router.get('/printer', productsController.printer);
router.get('/printer/single', productsController.single);

router.get('/laptop-accessories', productsController.laptopaccessories);
router.get('/laptop-accessories/single', productsController.single);

router.get('/tv', productsController.tv);
router.get('/tv/single', productsController.single);

router.get('/headphones', productsController.headphones);
router.get('/headphones/single', productsController.single);

router.get('/speakers', productsController.speakers);
router.get('/speakers/single', productsController.single);

router.get('/camera', productsController.camera);
router.get('/camera/single', productsController.single);

router.get('/camera-accessories', productsController.cameraaccessories);
router.get('/camera-accessories/single', productsController.single);

router.get('/consoles', productsController.consoles);
router.get('/consoles/single', productsController.single);

router.get('/may-lanh', productsController.maylanh);
router.get('/may-lanh/single', productsController.single);

router.get('/tu-lanh', productsController.tulanh);
router.get('/tu-lanh/single', productsController.single);

router.get('/may-giat', productsController.maygiat);
router.get('/may-giat/single', productsController.single);

module.exports = router;
