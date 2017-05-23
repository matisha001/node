//模块引用
var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class="title">Hello world</h2>');
 
$('.title').text('Hello there!');
$('.title').addClass('Welcome');
//输出
console.log($.html());