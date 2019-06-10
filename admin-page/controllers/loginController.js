const loginModel = require('../models/loginModel');
const passport = require('passport');

exports.index = function(req,res){
    res.render('log/index', {title: 'Login and signup'});
};

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
