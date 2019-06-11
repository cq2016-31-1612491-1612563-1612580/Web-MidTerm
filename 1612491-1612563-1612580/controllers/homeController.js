const userModel = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const {
    dbs
} = require('../dbs');


exports.index = function (req, res, next) {
    res.render('index', {
        NewProduct: [{
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price: '$280.00',
            uri: '/single'
        }, {
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price: '$250.00',
            uri: '/single'

        }, {
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price: '$300.00',
            uri: '/single'
        }],
        TVAudi: [{
            name: 'Sony 80 cm (32 inches)',
            image: '/images/m4.jpg',
            sales: '$320.00 ',
            price: '$340.00',
            uri: '/single'
        }, {
            name: 'Loa Artis',
            image: '/images/m5.jpg',
            sales: '$349.00 ',
            price: '$399.00',
            uri: '/single'
        }, {
            name: 'Loa Philips',
            image: '/images/m6.jpg',
            sales: '$249.00 ',
            price: '$300.00',
            uri: '/single'
        }],
        Houseware: [{
            name: 'Whirlpool 245',
            image: '/images/m7.jpg',
            sales: '$230.00 ',
            price: '$280.00',
            uri: '/single'
        }, {
            name: 'Máy Giặt BPL',
            image: '/images/m8.jpg',
            sales: '$180.00 ',
            price: '$200.00',
            uri: '/single'
        }, {
            name: 'Microwave Oven',
            image: '/images/m9.jpg',
            sales: '$199.00 ',
            price: '$299.00',
            uri: '/single'
        }],
    });
};

exports.contact = function (req, res, next) {
    res.render('contact', {
        title: 'Contact'
    });
};

exports.checkout = function (req, res, next) {
    res.render('checkout', {
        title: 'Checkout'
    });
};

exports.faqs = function (req, res) {
    res.render('faqs', {
        title: 'Faqs'
    });
};

exports.help = function (req, res) {
    res.render('help', {
        title: 'Help'
    });
};

exports.payment = function (req, res) {
    res.render('payment', {
        title: 'Payment'
    });
};

exports.privacy = function (req, res) {
    res.render('privacy', {
        title: 'Privacy'
    });
};

exports.single = function (req, res) {
    res.render('single', {
        maindetails: [{
            image: '/images/m7.jpg',
            name: 'Whirlpool 245',
            sales: '$230.00',
            price: '$280.00',
            image1: '/images/sii1.jpg',
            image2: '/images/sii2.jpg',
            image3: '/images/sii3.jpg',
        }]
    });
};

exports.single2 = function (req, res) {
    res.render('single2', {
        title: 'Single2'
    });
};

exports.terms = function (req, res) {
    res.render('terms', {
        title: 'Terms'
    });
};

exports.singlephone2 = function (req, res) {
    res.render('singlephone2', {
        title: 'Single Phone 2'
    });
};

exports.registerGet = function (req, res) {
    res.render('login/register', {
        title: 'Đăng kí mới'
    });
}

exports.registerPost = async (req, res) => {
    const user = await userModel.get(req.body.email);
    if (user)
        return res.render('login/register', {
            title: 'Đăng ký',
            message: 'Tài khoản đã tồn tại!'
        });

    const newUser = await userModel.register(req.body.email, req.body.password);
    res.redirect('/');

}

exports.signupGet = function (req, res) {
    res.render('login/signup', {
        title: 'Trang đăng nhập'
    });
}

exports.recovery = function (req, res) {
    res.render('login/recovery', {
        title: 'Quên mật khẩu'
    });
}

exports.recoveryPost = async (req, res, next) => {
    //check email
    const user = await userModel.get(req.body.email);
    console.log(user);

    if (!user) {
        return res.render('login/recovery', {
            title: 'Send mail',
            message: 'Tài khoản đã tồn tại!'
        });
    }
    await userModel.recover(req.body.email);
    res.redirect('/');

}

exports.recoveryPass = function (req, res) {
    res.render('login/recoveryPass', {
        title: 'Đổi mật khẩu'
    });
}

exports.recoveryPassPost = async (req, res, next) => {
    try {
        if (req.body.password == '' || req.body.password1 == '') {
            console.log('You have to fill password');
            redirect('login/recoveryPassPost');
            return;
        }
        const Olduser = await userModel.get(req.body.email);
        if (!Olduser) {
            return res.render('login/recovery', {
                title: 'Send mail',
                message: 'Tài khoản đã tồn tại!'
            });
        }
        const pass1 = req.body.password1;
        const pass2 = req.body.password2;
        
        console.log(pass1);

        await bcrypt.compare(pass1, pass2);

        console.log(Olduser);
        
        const newPass =  await bcrypt.hash(pass1, SALT_ROUNDS);
        Olduser.password = newPass;

        const Newuser = await dbs.production.collection('users').save(Olduser);

        console.log("now, you should sign up")
        console.log(Newuser)
        res.redirect('/signup');

    } catch (error) {
        console.log(error)
    }
}

exports.verify = function (req, res) {
    res.render('login/verify', {
        title: 'verify email'
    })
}

exports.verifyPost = async (req, res) => {
    try {
        //const {secretToken} = req.body;
        //new token was pasted
        const secretToken = req.body.secretToken;

        //find account matched to secretToken
        const user = await dbs.production.collection('users').findOne({
            'secretToken': secretToken
        });
        console.log(user);

        if (!user) {
            console.log("error find secretToken. No user found")
            res.redirect('/verify')
            return;
        }

        user.active = true;
        console.log(user.active)
        user.secretToken = '';

        dbs.production.collection('users').save(user);

        console.log("now, you should sign up")
        res.redirect('/signup');
    } catch (error) {
        console.log(error);
    }
}


exports.checkDisplay = async (req, res) => {
    req.body.isHidden = 'hidden';
}