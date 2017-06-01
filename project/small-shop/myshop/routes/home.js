//用户未登录将不能查看商品主页

//在请求处理中还需要判断用户的登陆状态，使用我们在登录处理时所保存的用户个人信息


module.exports = function(app) {
    app.get('/home', function(req, res) {
        if (req.session.user) {
            var Commodity = global.dbHelper.getModel('commodity');
            Commodity.find({}, function(error, docs) {
                //将Commoditys变量传入home模板
                res.render('home', { Commoditys: docs });
            });
        } else {
            req.session.error = "请先登录"
            res.redirect('/login');
        }
    });
    //添加保存商品的处理方法
    app.get('/addcommodity', function(req, res) {
        res.render('addcommodity');
    });


    app.post('/addcommodity', function(req, res) {
        var Commodity = global.dbHelper.getModel('commodity');
        Commodity.create({
            name: req.body.name,
            price: req.body.price,
            imgSrc: req.body.imgSrc
        }, function(error, doc) {
            if (doc) {
                res.send(200);
            } else {
                res.send(404);
            }
        });
    });
}
