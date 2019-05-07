var Cart = require('../models/cart');


var async = require('async');

exports.index = function (req,res) {
    res.render('index', { title: 'index' });
};

exports.index = function (req,res,next) {
    res.render('index', { title: 'index' });
};

exports.about = function (req,res) {
    res.render('about', { title: 'About' });
};

exports.contact = function (req,res,next) {
    res.render('contact', { title: 'Contact' });
};

exports.checkout = function (req,res) {
    res.render('checkout', { title: 'Checkout' });
};

exports.faqs = function (req,res) {
    res.render('faqs', { title: 'Faqs' });
};

exports.help = function (req,res) {
    res.render('help', { title: 'Help' });
};

exports.payment = function (req,res) {
    res.render('payment', { title: 'Payment' });
};

exports.privacy = function (req,res) {
    res.render('privacy', { title: 'Privacy' });
};

exports.product = function (req,res) {
    res.render('product', { title: 'Product' });
};

exports.product2 = function (req,res) {
    res.render('product2', { title: 'Product2' });
};

exports.single = function (req,res) {
    res.render('single', { title: 'Single' });
};

exports.single2 = function (req,res) {
    res.render('single2', { title: 'Single2' });
};

exports.terms = function (req,res) {
    res.render('terms', { title: 'Terms' });
};