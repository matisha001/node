'use strict';

var fs = require('fs');

var data1 = 'Hello, Node.js22222';
//异步写文件
fs.writeFile('output.txt', data1, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});


//同步写文件
var data2 = 'Hello, Node.js111111111';
fs.writeFileSync('output.txt', data2);