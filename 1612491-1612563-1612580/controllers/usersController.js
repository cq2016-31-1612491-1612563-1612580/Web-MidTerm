const userModel = require('../models/user');
exports.detail = async (req, res, next) => {
    var user = await userModel.get(req.query.email);
    res.render('users/detail', {title : 'Thông tin tài khoản', user});
};
exports.postDetail = async (req,res, next) => {
    var email = req.query.email;
    var body = {
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address
    }
    await userModel.update(email, body);
    res.redirect('/index');
}

exports.logout = (req, res) => {
    if(req.isAuthenticated())
    {
        req.logout();
        res.redirect('/');
    }
    else
    {
        res.send('Chưa đăng nhập');
    }
}

exports.account = async (req, res) =>{
    const user = await userModel.get(req.query.email);
    res.render('users/account', {title: 'Thông tin cá nhân', user});
}
exports.postAccount = async (req, res) => {
    const email = req.body.email;
    if(req.body.newpassword != req.body.newrepassword)
    {
        res.send('Xác nhận mật khẩu mới không khớp');
    }
    else
    {
        var result = await userModel.changePassword(email, req.body.password, req.body.newpassword);
        if(result == false)
        {
            res.send('Đổi mật khẩu thất bại, mật khẩu cũ không đúng');
        }
    }
    res.redirect('/');
}   