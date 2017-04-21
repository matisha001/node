/*
process.on('exit', function(code) {
  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  console.log('退出码为:', code);
});
console.log("程序执行结束");
*/
/*
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

//Node 的版本
console.log(process.version)

//node 的版本和依赖
console.log(process.versions)

//当前 node 执行文件的 javascript 配置选项
console.log(process.config)

//当前进程的进程号
console.log(process.pid)

//进程名
console.log(process.title)

//当前 CPU 的架构
console.log(process.arch)

// 平台信息
console.log(process.platform);
*/

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

// Node 已经运行的秒数
console.log(process.uptime());

//当前进程的高分辨时间
console.log(process.hrtime());