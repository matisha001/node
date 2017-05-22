var io = require('socket.io')(80);//服务监听
io.on('connection',function(socket){//连接成功...
     console.log("连接成功")
     socket.on('disconnect',function(){//用户已经离开...
         console.log("断开连接")
     });
});