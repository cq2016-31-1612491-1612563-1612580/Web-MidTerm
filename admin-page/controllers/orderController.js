const order = require('../models/orderModel');

exports.done = async (req, res, next) => {
    const data = await order.list();
    res.render('order/done', {  title: 'Danh sách hoàn thành', data })
};

exports.delivering = async (req, res, next) => {
    const data = await order.list();
    res.render('order/delivering', {  title: 'Đang giao', data })
};

exports.receive = async (req, res, next) => {
    const data = await order.list();
    res.render('order/receive', {  title: 'Danh sách đã nhận', data })
};

exports.delete = async (req, res, next) => {
    await order.delete(req.query.id);
    res.redirect('./');
}
