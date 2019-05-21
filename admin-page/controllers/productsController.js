const product = require('../models/productsModel');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.index = async (req, res, next) => {
    const data = await product.list();
    res.render('products/index', {  title: 'Danh sách sản phẩm', data })
};

exports.add = (req, res, next) => {
    res.render('products/add', {title: 'Thêm sản phẩm' });
};

exports.addPost = async (req, res, next) => {
    await product.add(req.body);
    res.redirect('./');
};

exports.update = async (req, res, next) => {
    const data = await product.detail(req.query.id);
    res.render('products/update', { title: 'Sửa sản phẩm', data });
};

exports.updatePost = async (req, res, next) => {
    await product.update(req.query.id, req.body);
    res.redirect('./');
};

exports.delete = async (req, res, next) => {
    await product.delete(req.query.id);
    res.redirect('./');
}
