const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('charts', {title:'Biểu đồ'});
});

module.exports = router;