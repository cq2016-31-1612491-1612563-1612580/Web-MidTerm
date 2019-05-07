var Home = require('../models/home');


var async = require('async');

exports.index = function (req,res) {
    res.render('index', { title: 'index' });
};

exports.index = function (req,res,next) {
    res.render('index', { title: 'index' });
};

exports.charts = function (req,res) {
    res.render('charts', { title: 'Charts' });
};

exports.compose = function (req,res,next) {
    res.render('compose', { title: 'Compose' });
};

exports.forgot = function (req,res) {
    res.render('forgot', { title: 'Forgot' });
};

exports.inbox = function (req,res) {
    res.render('inbox', { title: 'Inbox' });
};

exports.login = function (req,res) {
    res.render('login', { title: 'Login' });
};

exports.QuanLyDonDatHang = function (req,res) {
    res.render('QuanLyDonDatHang', { title: 'Quan Ly Don Dat Hang' });
};

exports.QuanLySanPham = function (req,res) {
    res.render('QuanLySanPham', { title: 'Quan Ly San Pham' });
};

exports.QuanLyTaiKhoan = function (req,res) {
    res.render('QuanLyTaiKhoan', { title: 'Quan Ly Tai Khoan' });
};

exports.signup = function (req,res) {
    res.render('signup', { title: 'Sign Up' });
};

exports.Top10 = function (req,res) {
    res.render('Top10', { title: 'Top 10' });
};

exports.widgets = function (req,res) {
    res.render('widgets', { title: 'Widgets' });
};
