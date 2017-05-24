var Cookie= require('express/node_modules/cookie'); //使用cookie
module.exports = function(app){
	var io = require('socket.io')(app);//app为参数
	var sockets = {};       //存储用户的socket
    var socketShops={};     //存储商家的socket
    var socketShopsName={}; //存储所有商家的名字
    var socketsTel={};      //存储所有用户电话
    var socketShopsService={}; //存储商家的服务
    //登录验证
    io.use(function(socket,next){
        var cookie =  Cookie.parse(socket.handshake.headers.cookie);
        if(!cookie.role) return next(new Error("登录失败！"));
        socket.role = cookie.role;
        if(cookie.role==1) {
            socket.name = cookie.name_s;
        }else{
            socket.name = cookie.name_u;
        }
        socket.tel=cookie.tel;
        socket.service=cookie.service;
        next()
    });
    io.on('connection', function (socket) {// 连接成功后，逻辑处理
        var id   = socket.id,role = socket.role;
        if(role == 1){//商户连接
            socket.join('shop');  //商家上线，加入商家组
            var user = io.sockets.adapter.rooms['user'];
            socketShops[id]=socket; //保存每个商家的连接
            socketShopsName[id]=socket.name; //保存商家的名称
            socketShopsService[id]=socket.service;  //保存商家服务
            socket.to('user').emit('message',{ //向每个用户发送广播，通知商家上线了
                cmd:'online',data: {id:id,name:socket.name,service:socket.service} 
            }); 
        }else if(role == 2){//用户连接
            socket.join('user');  
            sockets[id]=socket;
            socketsTel[id]=socket.tel;
        }
        
        socket.on('message',function(packet){// 收到消息
                      var sp = packet.cmd;
            switch(sp) {
                case "online"://收到用户上线指令，发送所有商家信息到用户页面
                    socket.send({cmd:"list",data:{names:socketShopsName,services:socketShopsService}}); 
                    break;
                case "chat"://与商家进行通信
                     socketShops[packet.data.id].send({cmd: "rec", data:{ id:id,message:packet.data.message,name:packet.data.name,tel:packet.data.tel}}); 
                    break;
                case "ok"://与用户进行通信
                    sockets[packet.data.id].send({cmd:"ok",data:packet.data.message}); 
                    break;
            }
        });
        
        socket.on('disconnect',function(){//断开连接
            delete socketShops[id];
            delete socketShopsName[id];
            delete sockets[id];
            delete socketsTel[id];
            delete socketShopsService[id] ;
            socket.to('user').emit('message',{ cmd:'list',data:{names:socketShopsName,services:socketShopsService}  });//向用户广播商家已下线
        });
    });
};