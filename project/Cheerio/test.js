var http = require('http');
var url = 'http://www.hubwiz.com/course/?type=all';
var cheerio = require('cheerio');
http.get(url, function(res){
    var html = '';
 
    res.on('data', function(data){
        html += data;
    })
    res.on('end',function(){
        // console.log(html)
        crawlerChapter(html);
    })
}).on('error', function(){
    console.log('爬取页面错误');
})
function crawlerChapter(html) {
    var $ = cheerio.load(html);
    var chapters = $('.panel-body');
    var data = [];
    var row =chapters.find('.col-md-3');
    row.map(function (node) {
        var row = $(this);
        var link =row.find("a").attr("href");
        var img =row.find("img").attr("src");
        var title = row.find('h3').text().trim();
        // var desc = row.find('p').text().trim();
        var chapterData = {
            link: link,
            img: img,
            title:title,
            // desc:desc
        };
        data.push(chapterData);
    });
    // printInfo(data);
    console.log(data)
};