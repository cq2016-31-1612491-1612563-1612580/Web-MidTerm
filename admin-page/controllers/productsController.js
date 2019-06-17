const product = require('../models/productsModel');
const cateModel = require('../models/categoryModel');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.index = async (req, res, next) => {
    const data = await product.list();
    if(req.isAuthenticated())
    {
        var user = req.user;
        if(user.admin == 'true')
        {
            res.render('products/index', {  title: 'Danh sách sản phẩm', data, user })
            console.log(data.img);
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

exports.add = async (req, res, next) => {
    if(req.isAuthenticated())
    {
        var user = req.user;
        if(user.admin == 'true')
        {
            var brand = await cateModel.list();
            res.render('products/add', {title: 'Thêm sản phẩm' , user, brand});
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
    res.render('products/add', {title: 'Thêm sản phẩm' });
};

exports.addPost = async (req, res, next) => {
    await product.add(req.body);
    res.redirect('./');
};

exports.update = async (req, res, next) => {
    const data = await product.detail(req.query.id);
    const brand = await cateModel.list();
    console.log(brand.name);
    res.render('products/update', { title: 'Sửa sản phẩm', data, brand});
};

exports.updatePost = async (req, res, next) => {
    var body;
    if (req.file == null)
    {
        body = {
            name: req.body.name,
            brand: req.body.brand,
            count: req.body.count,
            price: req.body.price
        }
    }
    else
    {
        body = {
            name: req.body.name,
            brand: req.body.brand,
            count: req.body.count,
            price: req.body.price,
            img: req.file.filename
        }
    }
    
    await product.update(req.body.id, body);
    res.redirect('./');
};

exports.delete = async (req, res, next) => {
    await product.delete(req.query.id);
    res.redirect('./');
}