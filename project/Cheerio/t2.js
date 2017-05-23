var html = '<ul id="fruits">' +
    '   <li class="apple">Apple</li>' +
    '   <li class="orange">Orange</li>' +
    '   <li class="pear" name="matisha">Pear</li>' +
    '</ul>';


/*
var cheerio = require('cheerio'),$ = cheerio.load(html);
$ = require('cheerio');
*/

/*
$ = require('cheerio');
$('ul', html);
*/

/*
$ = require('cheerio');
$('li', 'ul', html);
*/

var cheerio = require('cheerio');
var $ = cheerio.load(html);
console.log($('ul .pear').attr('name'))
console.log($('ul .pear').text())
$('.apple').attr('id', 'favorite').html()
console.log($.html());
