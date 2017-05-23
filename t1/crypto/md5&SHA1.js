const crypto = require('crypto');

const md5 = crypto.createHash('md5');
const sha1 = crypto.createHash('sha1');
const sha256 = crypto.createHash('sha256');
const sha512 = crypto.createHash('sha512');
// 可任意多次调用update():
md5.update('Hello, world!');
md5.update('Hello, nodejs!');
//update()方法默认字符串编码为UTF-8，也可以传入Buffer。
console.log(md5.digest('hex')); 

sha1.update('Hello, world!');
sha1.update('Hello, nodejs!');
console.log(sha1.digest('hex')); 

sha256.update('Hello, world!');
sha256.update('Hello, nodejs!');
console.log(sha256.digest('hex')); 

sha512.update('Hello, world!');
sha512.update('Hello, nodejs!');
console.log(sha512.digest('hex')); 