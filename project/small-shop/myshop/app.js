var express = require('express');
var app = express();
var path = require('path');
var mongoose = require("mongoose");
//使用了session(express-session模块)还有处理post请求数据的body属性(body-parser和multer模块)
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');

global.dbHelper = require( './common/dbHelper' );
//打开连接数据库并设置用户过期时间
global.db = mongoose.connect("mongodb://127.0.0.1:27017/test");
app.use(session({
    secret:'secret',
    cookie:{
        maxAge:1000*60*30
    }
}));

// 设定views变量，意为视图存放的目录
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(require('path').join(__dirname, 'public')));


// 设定view engine变量，意为网页模板引擎
//app.set('view engine', 'ejs');
app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );

//调用中间件使用
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());



// 设定静态文件目录，比如本地文件
// app.use(express.static(path.join(__dirname, 'public')));

//在register的post请求处理中使用了express-session模块来保存相关信息，使用中间件来传递这些提示信息
app.use(function(req, res, next){
    res.locals.user = req.session.user; //保存用户信息
    var err = req.session.error;  //保存结果响应信息
    res.locals.message = '';  // 保存html标签
    if (err) res.locals.message = '<div class="alert alert-danger" style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});

require('./routes')(app);

app.get('/', function (req, res) {  
   res.render('login');
});
 
app.listen(8000,function(){
	console.log('App start,port 8000.');
});