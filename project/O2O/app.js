var path = require('path'),
    logger = require('morgan'),
    express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');
var app = express(),
    server = require('http').Server(app);
//路径与使用view模版为html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine( '.html', require( 'ejs' ).__express );
//中间用到的插件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//设置本地静态资源路径
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);  
require('./lib/socket')(server);
server.listen(8012,function(){
    console.log('App start,port 8012.');
});