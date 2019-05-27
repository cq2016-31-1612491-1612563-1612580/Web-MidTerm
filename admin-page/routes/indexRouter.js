var express = require('express');
var router = express.Router();
const homeControllers = require('../controllers/homeController');

router.get('/', homeControllers.index);

router.get('/index', homeControllers.QuanLyTaiKhoan);

router.get('/Add', homeControllers.ThemTaiKhoan);
router.post('/Add', homeControllers.addPost);

router.get('/TaiKhoan/edit', homeControllers.SuaTaiKhoan);
router.post('/TaiKhoan/edit', homeControllers.SuaTaiKhoanPost);

router.get('/TaiKhoan/delete', homeControllers.delete);
router.post('/TaiKhoan/delete', homeControllers.delete);


module.exports = router;
