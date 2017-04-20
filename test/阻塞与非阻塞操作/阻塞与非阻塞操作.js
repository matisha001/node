/*阻塞与非阻塞操作*/
//阻塞操作
var fs = require("fs");

var data = fs.readFileSync('test.txt');

console.log(data.toString());
console.log("程序执行结束!");
/*
matisha.pw
程序执行结束!
*/
//非阻塞操作
var fs = require("fs");

fs.readFile('test.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
/*
程序执行结束!
matisha.pw
*/