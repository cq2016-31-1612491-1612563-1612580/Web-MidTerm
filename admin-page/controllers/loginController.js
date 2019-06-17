const loginModel = require('../models/loginModel');
const userModel = require('../models/usersModel');

exports.index = function(req,res){
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log(user);
    }
    res.render('log/index', {title: 'Login and signup', user});
};

exports.detail = (req, res) =>{
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log(user);
        res.render('log/detail', {
            title: 'Chi tiết tài khoản',
            user: user
        });
    }
    else
    {
        res.send('Chưa đăng nhập');
    }
    
}

exports.saveDetail = async (req, res) => {
    var id = req.user._id;
    var body = {
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address
    }
    await userModel.update(id, body);
    res.redirect('back');
}

exports.signupPost = async (req, res, next) => {

    if(req.body.password !== req.body.repass )
    {
        console.log('Password không khớp');
        
    }
    else
    {
        const user = await loginModel.get(req.body.email);
        if (user)
        {
            console.log('Đã tồn tại email');
            return res.redirect('/log');
        }
        
        console.log('Register');
        const newUser = await loginModel.register(req.body.email, req.body.password);
        res.redirect('/');
    }
};

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

