const userModel = require('../models/usersModel');

exports.list = async(req, res, next) => {
    if(req.isAuthenticated())
    {
        var user = req.user;
        if(user.admin == 'true')
        {
            const data = await userModel.list();
            res.render('users/list', {title : 'Danh sách tài khoản', data, user})
        }
        else
        {
            res.send('Hãy đăng nhập bằng tài khoản admin');
        }
    }
    else
    {
        res.send('Yêu cầu đăng nhập trước');
    }
    
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

exports.lock = async (req, res, next) => {
    const user = await userModel.detail(req.query.id);
    if(user.admin == 'true')
    {
        res.send('Không thể khóa tài khoản Admin');
    }
    else
    {
        await userModel.update(req.query.id, {locked: 'true'});
    res.send('Đã khóa tài khoản');
    }
}