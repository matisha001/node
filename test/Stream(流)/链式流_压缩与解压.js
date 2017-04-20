/*压缩*/
var fs = require("fs");
var zlib = require('zlib');
// 压缩 test.txt 文件为 test.txt.gz
fs.createReadStream('test.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('test.txt.gz'));

console.log("文件压缩完成。");
/*解压*/
var fs = require("fs");
var zlib = require('zlib');

// 解压 test.txt.gz 文件为 test.txt
fs.createReadStream('test.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('test.txt'));

console.log("文件解压完成。");
