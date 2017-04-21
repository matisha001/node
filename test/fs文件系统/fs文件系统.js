
var fs = require("fs");

/*读取文件fs.readFile和fs.readFileSync
fs.readFile('test.txt', function (err, data) {// 异步读取
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});
var data = fs.readFileSync('test.txt');// 同步读取
console.log("同步读取: " + data.toString());
*/



/*异步模式 获取文件信息fs.stat
fs.stat('./demo.js', function (err, stats) {
    console.log(stats.isFile()); 		//true
})
*/

/*异步模式 写入文件fs.writeFile
fs.writeFile('test.txt', '我是通过写入的文件内容！',  function(err) {
   if (err) {
       return console.error(err);
   }
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});
*/

/*异步模式 打开文件fs.open 读取文件fs.read  关闭文件fs.close  截取文件fs.ftruncate
var buf = new Buffer(1024);
fs.open('test.txt', 'r+', function(err, fd) {// 异步模式 打开文件fs.open
   if (err) return console.error(err);
   fs.ftruncate(fd, 20, function(err){//异步模式  截取文件fs.ftruncate
      if (err) console.log(err);
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){//异步模式 读取文件fs.read
      	if (err) console.log(err);
         if(bytes > 0) console.log(buf.slice(0, bytes).toString());// 仅输出读取的字节
         fs.close(fd, function(err){//异步模式  关闭文件
            if (err) console.log(err);
            console.log("文件关闭成功！");
         });
      });
   });
});
*/


/*删除文件fs.unlink
fs.unlink('1.txt', function(err) {
   if (err) return console.error(err);
   console.log("文件删除成功！");
}); 
*/


/*创建目录fs.mkdir
fs.mkdir("./matisha/",function(err){
   if (err) return console.error(err);
   console.log("目录创建成功。");
});
*/

/*读取目录fs.readdir
fs.readdir("./matisha/",function(err, files){
   if (err) return console.error(err);
   files.forEach( function (file){
       console.log( file );
   });
});
*/

/*删除目录fs.rmdir*/
fs.rmdir("./matisha",function(err){
   if (err) return console.error(err);
   fs.readdir("./",function(err, files){
      if (err) return console.error(err);
      files.forEach( function (file){
          console.log( file );
      });
   });
});
















