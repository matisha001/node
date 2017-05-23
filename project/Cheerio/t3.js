var http = require('http');
var url = 'http://www.hubwiz.com/course/5437538a032c781670afddbe/';
// var url = 'http://download.csdn.net/';
var cheerio = require('cheerio');
http.get(url, function(res){
    var html = '';
 
    res.on('data', function(data){
        html += data;
    })
    res.on('end',function(){
        console.log(html);
    })
}).on('error', function(){
    console.log('爬取页面错误');
})