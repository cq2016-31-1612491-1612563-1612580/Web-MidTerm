const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsController');

router.get('/', productsControllers.index);

router.get('/add', productsControllers.add);
router.post('/add', productsControllers.addPost);

module.exports = router;