var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
/*
获取GET请求内容
*/
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

/*
获取 POST 请求内容
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
    var post = '';// 定义了一个post变量，用于暂存请求体的信息
    req.on('data', function(chunk){    
        post += chunk;// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){    
        post = querystring.parse(post);
        console.log(post)
        res.end(util.inspect(post));
    });
}).listen(3000);
*/