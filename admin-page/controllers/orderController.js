const order = require('../models/orderModel');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.index = async (req, res, next) => {
    const data = await order.list();
    res.render('order/index', {  title: 'Danh sách hoá đơn', data })
};

exports.delete = async (req, res, next) => {
    await order.delete(req.query.id);
    res.redirect('./');
};

exports.add = (req, res, next) => {
    res.render('order/add', {title: 'Thêm đơn hàng' });
};

exports.addPost = async (req, res, next) => {
    await order.add(req.body);
    res.redirect('./');
}

exports.update = async (req, res, next) => {
    const data = await order.detail(req.query.id);
    res.render('order/update', { title: 'Sửa hoá đơn', data });
};

exports.updatePost = async (req, res, next) => {
    await order.update(req.query.id, req.body);
    res.redirect('./');
};
