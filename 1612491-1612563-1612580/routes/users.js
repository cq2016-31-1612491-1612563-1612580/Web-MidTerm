var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.get('/detail', usersController.detail);

//router.post('/detail', usersController.detailPost);

router.post('/detail', usersController.postDetail);


router.get('/users', function(res,req){
    return res.send("working men")
});

router.get('/account', usersController.account);
router.post('/account', usersController.postAccount);

router.get('/logout', usersController.logout);

module.exports = router;
