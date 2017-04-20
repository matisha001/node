/*
查看文件内容cat output.txt  (linux下)
从一个流中获取数据并将数据传递到另外一个流中
*/
var fs = require("fs");
// 创建一个可读流
var readerStream = fs.createReadStream('test.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 test.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序执行完毕");