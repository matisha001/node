console.log(global.console);


// console.log(global.process);


console.log(process.version);



console.log(process === global.process);


console.log(process.platform);
console.log(process.version);
console.log(process.arch);
console.log(process.cwd());//返回当前工作目录
// process.chdir('/private/tmp');//切换当前工作目录
console.log(process.cwd());
// console.log(process.version);
// console.log(process.version);


//process
// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');



// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});