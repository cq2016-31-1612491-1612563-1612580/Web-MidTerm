exports.home = (req, res, next) => {
    res.render('home/index', { title: 'Trang chủ'});
};