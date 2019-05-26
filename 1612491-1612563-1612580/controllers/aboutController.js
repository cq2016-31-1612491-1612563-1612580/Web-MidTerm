var about = require('../models/about');


var async = require('async');

exports.index = function (req,res, next) {
    res.render('abouts/index', { title: 'Về chúng tôi' });
};

