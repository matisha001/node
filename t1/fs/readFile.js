'use strict';

var fs = require('fs');

//异步读文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


// fs.readFile('sample.jpg','base64',function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//     }
// });

//同步读文件

console.log("同步读取")
var data = fs.readFileSync('sample.txt', 'utf-8');
console.log(data);