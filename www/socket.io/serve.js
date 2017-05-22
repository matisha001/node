var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.status(200).send('matisha001@sina.com');
});
app.get('/index', function(req, res) {
    res.sendFile('client.html', { root: __dirname });
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);
/*
io.on('connection',function(socket){
  socket.send('matisha002');
  socket.on('message',function(data){
      console.log(data); //收到消息
  });
});
*/

io.on('connection', function(socket) {
    socket.emit('message', '连接成功111！');
    socket.on('message', function(data) {
    	console.log(data); //收到消息
    });
});
server.listen(8080);
