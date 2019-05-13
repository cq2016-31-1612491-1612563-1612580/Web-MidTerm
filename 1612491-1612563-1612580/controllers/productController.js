var Product = require('../models/product');


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

exports.product = function (req,res, next) {
    res.render('product', {
        PhoneProduct: [{
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price:'$280.00',
            uri:'/single'
        }, {
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price:'$250.00',
            uri: '/singlephone2'

        }, {
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price:'$300.00',
            uri: '/single'

        }],
    });
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
