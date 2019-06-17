
exports.index = function(req,res){
    if(req.isAuthenticated())
    {
        var user = req.user;
        console.log(user);
    }
    res.render('home/index', {title:'Trang chủ', user: user})
};

