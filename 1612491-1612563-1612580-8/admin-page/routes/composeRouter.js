const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('compose', {title:'Compose'});
});

module.exports = router;