//url.parse 解析url
var url = require('url');
console.log(url.parse('https://www.baidu.com/s?ie=UTF-8&wd=f%20fs', true, true));


//url.format 生成url
var test = url.format({
    protocol: 'http:',
    hostname: 'www.baidu.com',
    port: '80',
    pathname: '/news',
    query: { page: 1 }
});
console.log(test)


//url.resolve 跳转url
var t1 = url.resolve('http://www.baidu.com/one', '/two')
console.log(t1)
