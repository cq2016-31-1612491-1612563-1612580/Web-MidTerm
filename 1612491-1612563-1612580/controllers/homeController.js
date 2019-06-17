const userModel = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var product = require('../models/product');
const SALT_ROUNDS = 10;
const {
    dbs
} = require('../dbs');


exports.indexing = async (req, res, next)=> { 
    
    console.log('vao page index')
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log(user);
    }

    res.render('index', {
        user,
        NewProduct: [{
            id:'1001',
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price: '$280.00',
            image1: '/images/si1.jpg',
            image2: '/images/si2.jpg',
            image3: '/images/si3.jpg',
        }, {
            id:'1002',
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price: '$250.00',
            image1: '/images/m2.jpg',
            image2: '/images/m2.jpg',
            image3: '/images/m2.jpg',
        }, {
            id:'1003',
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price: '$300.00',
            image1: '/images/m3.jpg',
            image2: '/images/m3.jpg',
            image3: '/images/m3.jpg',
        }],
        TVAudi: [{
            id:'1004',
            name: 'Sony 80 cm (32 inches)',
            image: '/images/m4.jpg',
            sales: '$320.00 ',
            price: '$340.00',
            image1: '/images/m4.jpg',
            image2: '/images/m4.jpg',
            image3: '/images/m4.jpg',
        }, {
            id:'1005',
            name: 'Loa Artis',
            image: '/images/m5.jpg',
            sales: '$349.00 ',
            price: '$399.00',
            image1: '/images/m5.jpg',
            image2: '/images/m5.jpg',
            image3: '/images/m5.jpg',
        }, {
            id:'1006',
            name: 'Loa Philips',
            image: '/images/m6.jpg',
            sales: '$249.00 ',
            price: '$300.00',
            image1: '/images/m6.jpg',
            image2: '/images/m6.jpg',
            image3: '/images/m6.jpg',
        }],
        Houseware: [{
            id:'1007',
            name: 'Whirlpool 245',
            image: '/images/m7.jpg',
            sales: '$230.00 ',
            price: '$280.00',
            image1: '/images/m7.jpg',
            image2: '/images/m7.jpg',
            image3: '/images/m7.jpg',
        }, {
            id:'1008',
            name: 'Máy Giặt BPL',
            image: '/images/m8.jpg',
            sales: '$180.00 ',
            price: '$200.00',
            image1: '/images/m8.jpg',
            image2: '/images/m8.jpg',
            image3: '/images/m8.jpg',
        }, {
            id:'1009',
            name: 'Microwave Oven',
            image: '/images/m9.jpg',
            sales: '$199.00 ',
            price: '$299.00',
            image1: '/images/m9.jpg',
            image2: '/images/m9.jpg',
            image3: '/images/m9.jpg',
        }],
    });

    try{
        const PhoneProduct4 = [{
            id:'1001',
            image: '/images/m1.jpg',
            name: 'Samsung Galaxy J7',
            sales: '$200.00',
            price: '$280.00',
            image1: '/images/si1.jpg',
            image2: '/images/si2.jpg',
            image3: '/images/si3.jpg',
        }, {
            id:'1002',
            image: '/images/m2.jpg',
            name: 'OPPO A37f',
            sales: '$230.00',
            price: '$250.00',
            image1: '/images/m2.jpg',
            image2: '/images/m2.jpg',
            image3: '/images/m2.jpg',
        }, {
            id:'1003',
            image: '/images/m3.jpg',
            name: 'Apple iPhone X',
            sales: '$280.00',
            price: '$300.00',
            image1: '/images/m3.jpg',
            image2: '/images/m3.jpg',
            image3: '/images/m3.jpg',
        }, {
            id:'1004',
            name: 'Sony 80 cm (32 inches)',
            image: '/images/m4.jpg',
            sales: '$320.00 ',
            price: '$340.00',
            image1: '/images/m4.jpg',
            image2: '/images/m4.jpg',
            image3: '/images/m4.jpg',
        }, {
            id:'1005',
            name: 'Loa Artis',
            image: '/images/m5.jpg',
            sales: '$349.00 ',
            price: '$399.00',
            image1: '/images/m5.jpg',
            image2: '/images/m5.jpg',
            image3: '/images/m5.jpg',
        }, {
            id:'1006',
            name: 'Loa Philips',
            image: '/images/m6.jpg',
            sales: '$249.00 ',
            price: '$300.00',
            image1: '/images/m6.jpg',
            image2: '/images/m6.jpg',
            image3: '/images/m6.jpg',
        },{
            id:'1007',
            name: 'Whirlpool 245',
            image: '/images/m7.jpg',
            sales: '$230.00 ',
            price: '$280.00',
            image1: '/images/m7.jpg',
            image2: '/images/m7.jpg',
            image3: '/images/m7.jpg',
        }, {
            id:'1008',
            name: 'Máy Giặt BPL',
            image: '/images/m8.jpg',
            sales: '$180.00 ',
            price: '$200.00',
            image1: '/images/m8.jpg',
            image2: '/images/m8.jpg',
            image3: '/images/m8.jpg',
        }, {
            id:'1009',
            name: 'Microwave Oven',
            image: '/images/m9.jpg',
            sales: '$199.00 ',
            price: '$299.00',
            image1: '/images/m9.jpg',
            image2: '/images/m9.jpg',
            image3: '/images/m9.jpg',
        }];

        PhoneProduct4.forEach(element => {
            var check4 = dbs.production.collection('products').findOne({id: element.id}, function(err,result){
                if (err) throw err;
                console.log(result);
                //result là kết quả chính xác bảng nào có kết quả trùng khớp với đk query
                if(!result){
                    dbs.production.collection('products').insertOne(element);
                }
            });
        });
    }catch(error){
        console.log(error);
    }

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

exports.terms = function (req, res) {
    res.render('terms', {
        title: 'Terms'
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
    res.render('login/login', {
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
        res.redirect('/login');

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
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }

}


exports.checkDisplay = async (req, res) => {
    req.body.isHidden = 'hidden';
}

exports.index = function(req,res){
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log('Đã đăng nhập');
    }
    res.render('index', {title:'trang chu', user})
};

