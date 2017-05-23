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
        console.log(html)
        crawlerChapter(html);
    })
}).on('error', function(){
    console.log('爬取页面错误');
})
function crawlerChapter(html) {
    var $ = cheerio.load(html);
    var chapters = $('.panel');
    var data = [];
 
    chapters.map(function (node) {
        var chapters = $(this);
        var chapterTitle = chapters.find('h4').text().trim();
        var sections = chapters.find('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            section: []
        };
        sections.map(function (node) {
            var section = $(this).text().trim();
            chapterData.section.push(section);
        });
        data.push(chapterData);
    });
    // printInfo(data);
    console.log(data)
};
function printInfo(data) {
    data = data.filter(function filterByID(obj) {
        return obj.chapterTitle ? true : false;
    });
    data.map(function (item) {
        var chapterTitle = item.chapterTitle;
        console.log('【' + chapterTitle + '】\n');
        item.section.map(function (section) {
            console.log('   【' + section + '】\n');
        });
    })
};