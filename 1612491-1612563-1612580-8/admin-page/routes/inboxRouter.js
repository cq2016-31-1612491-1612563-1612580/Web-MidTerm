const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('inbox', {title:'Inbox'});
});

module.exports = router;