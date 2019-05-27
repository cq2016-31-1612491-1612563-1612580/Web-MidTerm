const account = require('../models/usersModel');

exports.list = async(req, res, next) => {
    const data = await account.list();
    res.render('users/list', {title : 'Danh sách tài khoản', data})
};

exports.detail = async (req, res, next) => {
    const data = await account.detail(req.query.id);
    res.render('users/detail', { title: 'Thông tin tài khoản', data });
};
