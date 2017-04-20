// 创建 Buffer 类
var buffer = new Buffer(256);
//写入缓冲区
len = buffer.write("www.matisha.pw");
console.log("写入字节数 : "+  len);
//读取缓冲区数据
console.log( buffer.toString('utf8',0,5));
//Buffer 转换为 JSON 对象
var json = buffer.toJSON();
console.log(json);
//缓冲区合并
var buffer1 = new Buffer('www.matisha.pw');
var buffer2 = new Buffer('matisha');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
//缓冲区比较
var buffer4 = new Buffer('www.matisha.pw->matisha');
var result = buffer4.compare(buffer1);
if(result > 0) {
   console.log(buffer1 + " 在 " + buffer4 + "之后");
}
//拷贝缓冲区
// 拷贝一个缓冲区
var buffer5 = new Buffer(3);
buffer1.copy(buffer5);
console.log("buffer5 content: " + buffer5.toString());
//缓冲区裁剪
var buffer6 = buffer1.slice(0,2);
console.log("buffer6 content: " + buffer6.toString());
//缓冲区长度
console.log("buffer length: " + buffer1.length);
