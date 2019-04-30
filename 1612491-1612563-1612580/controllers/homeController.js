var Home = require('../models/home');


var async = require('async');

exports.index = function (req,res) {
    res.render('index', { title: 'index' });
};