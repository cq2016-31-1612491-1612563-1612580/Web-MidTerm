var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/detail', usersController.detail);
//router.post('/detail', usersController.detailPost);

router.get('/users', function(res,req){
    return res.send("working men")
})



module.exports = router;
