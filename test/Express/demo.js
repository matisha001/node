var express = require('express');
var app = express();
app.use(express.static('static'));//设置静态文件目录
//静态资源访问地址localhost:8081/1.jpg
app.get('/', function (req, res) {//  GET 请求
   res.send('Hello World');
})
app.post('/matisha', function (req, res) {//  POST 请求
   res.send('主页 POST 请求matisha');
})
app.get('/user', function (req, res) {//  GET 请求
   res.send('user 响应 DELETE 请求');
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})