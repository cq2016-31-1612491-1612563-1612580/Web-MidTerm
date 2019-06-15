const category = require('../models/categoryModel');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.index = async (req, res, next) => {
    const data = await category.list();
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log(user);
    }
    res.render('category/index', {  title: 'Danh sách loại sản phẩm', data, user })
};

exports.add = (req, res, next) => {
    res.render('category/add', {title: 'Thêm loại sản phẩm' });
};

exports.addPost = async (req, res, next) => {
    await category.add(req.body);
    res.redirect('./');
};

exports.update = async (req, res, next) => {
    const data = await category.detail(req.query.id);
    res.render('category/update', { title: 'Sửa loại sản phẩm', data });
};

exports.updatePost = async (req, res, next) => {
    await category.update(req.query.id, req.body);
    res.redirect('./');
};

exports.delete = async (req, res, next) => {
    await category.delete(req.query.id);
    res.redirect('./');
}
