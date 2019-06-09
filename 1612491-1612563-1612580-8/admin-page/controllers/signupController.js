const order = require('../models/signupModel');

exports.add = (req, res, next) => {
    res.render('order/add', {title: 'Thêm đơn hàng' });
};

exports.addPost = async (req, res, next) => {
    await order.add(req.body);
    res.redirect('./');
}
