const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderController');

router.get('/done', orderControllers.done);

router.get('/delivering', orderControllers.delivering);

router.get('/receive', orderControllers.receive);


module.exports = router;
