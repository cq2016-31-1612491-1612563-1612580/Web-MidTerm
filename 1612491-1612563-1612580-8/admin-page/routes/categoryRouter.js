const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.index);
router.get('/add', categoryController.add);
router.post('/add', categoryController.addPost);
router.get('/update', categoryController.update);
router.post('/update', categoryController.updatePost);
router.get('/delete', categoryController.delete);

module.exports = router;
