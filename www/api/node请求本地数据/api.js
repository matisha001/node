/*
访问本地站点文件，nodejs改变代码不需要重启的方法
*/
var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'C:/Users/jh/Desktop/myapi/node/www/ajax/data/data.txt';
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){

    var url = req.url; 
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;

    req.setEncoding("utf8");
    //设置了接收数据的编码格式为UTF-8
    fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'   
                // 'charset': 'utf-8',
                 // "Content-Type":'application/json',          text/plain  
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                "Content-Type":'application/json'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });
}).listen(8888);

console.log('服务器开启成功');