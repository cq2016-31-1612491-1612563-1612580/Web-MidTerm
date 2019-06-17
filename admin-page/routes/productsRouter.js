const express = require('express');
const router = express.Router();
var multer = require('multer');
const productsControllers = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images')
    },
    filename: function(req,file, cb){
        cb(null, file.originalname)
    }
});
var upload = multer({storage: storage});

router.get('/', productsControllers.index);
router.get('/add', productsControllers.add);
router.post('/add', productsControllers.addPost);
router.get('/update', productsControllers.update);
router.post('/update', upload.single("fileImg"), productsControllers.updatePost);
router.get('/delete', productsControllers.delete);



module.exports = router;