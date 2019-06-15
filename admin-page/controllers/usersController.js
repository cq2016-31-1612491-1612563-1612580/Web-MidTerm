const userModel = require('../models/usersModel');

exports.list = async(req, res, next) => {
    const data = await userModel.list();
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log(user);
    }
    res.render('users/list', {title : 'Danh sách tài khoản', data, user})
};

exports.detail = async (req, res, next) => {
    const user = await userModel.detail(req.query.id);
    res.render('users/detail', { title: 'Thông tin tài khoản', user });
};

exports.saveDetail = async (req, res) => {
    var id = req.body.id;
    console.log(id);
    var body = {
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address
    }
    await userModel.update(id, body);
    res.redirect('./list');
}
 

exports.delete = async (req, res, next) => {
    await userModel.delete(req.query.id);
    res.redirect('back');
}
