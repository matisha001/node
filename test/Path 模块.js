var path = require("path");

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

//
console.log(path.isAbsolute("t1.js"))
// 转换为绝对路径


console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));

//
var data1 = path.basename('/foo/index.html');
var data2 = path.basename('/foo/index.html','.html');
console.log(data1 + ' "and" ' + data2);