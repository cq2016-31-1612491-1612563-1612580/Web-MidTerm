const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orderController');

router.get('/', orderControllers.index);

router.get('/delete', orderControllers.delete);

router.get('/add', orderControllers.add);
router.post('/add', orderControllers.addPost);

router.get('/update', orderControllers.update);
router.post('/update', orderControllers.updatePost);

module.exports = router;
