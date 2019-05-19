const product = require('../models/QuanLySanPham');

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

exports.index = async (req, res, next) => {
    const data = await product.list();
    res.render('QuanLySanPham', { category: 'Sản phẩm', categoryLink: '/product', title: 'Danh sách sản phẩm', data })
};

exports.add = (req, res, next) => {
    res.render('addSanPham', { category: 'Sản phẩm', categoryLink: '/product', title: 'Thêm sản phẩm' });
};

exports.addPost = async (req, res, next) => {
    await product.add(req.body);
    res.redirect('./');
};