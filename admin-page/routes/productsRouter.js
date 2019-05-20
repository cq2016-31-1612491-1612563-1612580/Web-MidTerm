const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsController');

router.get('/', productsControllers.index);

router.get('/add', productsControllers.add);
router.post('/add', productsControllers.addPost);
router.get('/update', productsControllers.update);
router.post('/update', productsControllers.updatePost);
router.get('/delete', productsControllers.delete);

module.exports = router;