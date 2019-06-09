const userModel = require('../models/user');

exports.index = function (req,res,next) {
    res.render('index', {
        NewProduct: [{
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price:'$280.00',
            uri:'/single'
        }, {
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price:'$250.00',
            uri: '/single'

        }, {
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price:'$300.00',
            uri: '/single'
        }],
        TVAudi:[{
            name: 'Sony 80 cm (32 inches)',
            image: '/images/m4.jpg',
            sales: '$320.00 ',
            price:'$340.00',
            uri: '/single'
        }, {
            name: 'Loa Artis',
            image: '/images/m5.jpg',
            sales: '$349.00 ',
            price:'$399.00',
            uri: '/single'
        }, {
            name: 'Loa Philips',
            image: '/images/m6.jpg',
            sales: '$249.00 ',
            price:'$300.00',
            uri: '/single'
        }],
        Houseware:[{
            name: 'Whirlpool 245',
            image: '/images/m7.jpg',
            sales: '$230.00 ',
            price:'$280.00',
            uri: '/single'
        }, {
            name: 'Máy Giặt BPL',
            image: '/images/m8.jpg',
            sales: '$180.00 ',
            price:'$200.00',
            uri: '/single'
        }, {
            name: 'Microwave Oven',
            image: '/images/m9.jpg',
            sales: '$199.00 ',
            price:'$299.00',
            uri: '/single'
        }],
    });
};

exports.contact = function (req,res,next) {
    res.render('contact', { title: 'Contact' });
};

exports.checkout = function (req,res, next) {
    res.render('checkout', { title: 'Checkout' });
};

exports.faqs = function (req,res) {
    res.render('faqs', { title: 'Faqs' });
};

exports.help = function (req,res) {
    res.render('help', { title: 'Help' });
};

exports.payment = function (req,res) {
    res.render('payment', { title: 'Payment' });
};

exports.privacy = function (req,res) {
    res.render('privacy', { title: 'Privacy' });
};

exports.single = function (req,res) {
    res.render('single', {
        maindetails:[{
            image:'/images/m7.jpg',
            name:'Whirlpool 245',
            sales:'$230.00',
            price:'$280.00',
            image1:'/images/sii1.jpg',
            image2:'/images/sii2.jpg',
            image3:'/images/sii3.jpg',
        }]
    });
};

exports.single2 = function (req,res) {
    res.render('single2', { title: 'Single2' });
};

exports.terms = function (req,res) {
    res.render('terms', { title: 'Terms' });
};

exports.singlephone2 = function (req, res) {
  res.render('singlephone2', { title: 'Single Phone 2'});
};

exports.registerGet = function(req,res){
    res.render('login/register', {title:'Đăng kí mới'});
}

exports.registerPost = async (req,res) =>{
    const user = await userModel.get(req.body.email);
  if (user)
    return res.render('login/register', {title: 'Đăng ký', message: 'Tài khoản đã tồn tại!'});
  const newUser = await userModel.register(req.body.email, req.body.password);
  res.redirect('/');
}

exports.signupGet = function(req,res){
    res.render('login/signup', {title: 'Trang đăng nhập'});
}

exports.recovery = function(req,res){
    res.render('login/recovery', {title: 'Quên mật khẩu'});
}