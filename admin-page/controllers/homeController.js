const QuanLyTaiKhoan = require('../models/QuanLyTaiKhoan');

exports.index = function(req,res){
    if(!req.isAuthenticated())
    {
        var user = false;
        console.log(user);
        
    }
    else
    {
        var user = req.user;
        console.log(user);
    }
    res.render('home/index', {title:'trang chu', user: user})
};

exports.QuanLyTaiKhoan = async (req, res, next) => {
    const users = [{
        username: 'lukka',
        email: 'lukka@optonline.net',
        phone: '0496406146',
    },
        {
            username: 'ryanvm',
            email: 'ryanvm@aol.com',
            phone: '146604560',
        },
        {
            username: 'rmcfa',
            email: 'rmcfarla@live.com',
            phone: '146604560',
        },
        {
            username: 'ranasta',
            email: 'ranasta@me.com',
            phone: '526980288',
        },
        {
            username: 'sonnen',
            email: 'sonnen@verizon.net',
            phone: '7039393699',
        },
        {
            username: 'containfizzle',
            email: 'zwood@sbcglobal.net',
            phone: '97000356256',
        },
        {
            username: 'wilfernerd',
            email: 'ghost@mac.com',
            phone: '013431434',
        },
        {
            username: 'sonnen',
            email: 'sonnen@verizon.net',
            phone: '7039393699',
        },
        {
            username: 'containfizzle',
            email: 'zwood@sbcglobal.net',
            phone: '97000356256',
        },
        {
            username: 'wilfernerd',
            email: 'ghost@mac.com',
            phone: '013431434',
        },
        {
            username: 'wilfernerd',
            email: 'ghost@mac.com',
            phone: '013431434',
        },
        {
            username: 'wilfernerd',
            email: 'ghost@mac.com',
            phone: '013431434',
        },
        {
            username: 'sonnen',
            email: 'sonnen@verizon.net',
            phone: '7039393699',
        },
        {
            username: 'containfizzle',
            email: 'zwood@sbcglobal.net',
            phone: '97000356256',
        },
        {
            username: 'wilfernerd',
            email: 'ghost@mac.com',
            phone: '013431434',
        },
        {
            username: 'wilfernerd',
            email: 'ghost@mac.com',
            phone: '013431434',
        }];
    var data = await QuanLyTaiKhoan.list();
    data.forEach((element, index) => {
        element.id = (index + 1).toString();
    });
    res.render('TaiKhoan/index', {title: 'Quản lý sản phẩm', data});
};

exports.addPost = async (req, res, next) => {
    await QuanLyTaiKhoan.add(req.body);
    res.redirect('./');
};

exports.ThemTaiKhoan = (req, res, next) => {
    res.render('TaiKhoan/Add', { title: 'Thêm sản phẩm'});
};

exports.SuaTaiKhoan = async (req, res, next) => {
    const user = await QuanLyTaiKhoan.detail(req.query.id);
    res.render('TaiKhoan/edit', { title: 'Sửa tài khoản', user });
};

exports.SuaTaiKhoanPost = async (req, res, next) => {
    await QuanLyTaiKhoan.update(req.query.id, req.body);
    res.render('home/index');
};

exports.delete = async (req, res, next) => {
    await QuanLyTaiKhoan.delete(req.query.id);
    res.render('TaiKhoan/index');
}
