var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/admin', function(req,res){
   res.sendFile(path.join('../admin-page/views/home/index.hbs'));
})