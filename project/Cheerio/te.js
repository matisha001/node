var http = require('http');
var url = 'http://www.marketwatch.com/investing/stock/sfhd';
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
    var chapters = $('.region--fixed');
    var data = [];
    chapters.map(function (node) {
        var row = $(this);
        // var link =row.find(".template--aside").text().trim();
        var timestamp__time =row.find(".template--aside .timestamp__time").text().trim();
        var intraday__price =row.find(".template--aside .u-semi").text().trim();
         
        var title =row.find(".template--primary").text().trim();
        var chapterData = {
            timestamp__time: timestamp__time,
            intraday__price:intraday__price,
            // title:title
        };
        data.push(chapterData);
    });
    // printInfo(data);
    console.log(data)
};