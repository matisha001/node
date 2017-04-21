// 输出全局变量 __filename 的值
console.log( __filename );
// 输出全局变量 __dirname 的值
console.log( __dirname );


function printHello(){
   console.log( "Hello, World!");
}
// 10ms后执行以上函数
var t = setTimeout(printHello, 10);

// 清除定时器
clearTimeout(t)


function printHello1(){
   console.log( "Hello, matisha!");
}
// 100ms后执行以上函数
var t1 = setInterval(printHello1, 100);
clearInterval(t1)

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

console.info("程序执行完毕。")

