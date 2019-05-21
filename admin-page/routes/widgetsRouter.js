const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('widgets', {title:'Widgets'});
});

module.exports = router;