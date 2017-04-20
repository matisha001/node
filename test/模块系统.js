/*hello.js
通过 exports 对象把 world 作为模块的访问接口
*/
exports.world = function() {
  console.log('Hello World');
}
/*my.js
通过module.exports将一个对象封装到模块
*/
function Matisha() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}; 
module.exports = Matisha;
/*main.js
从外部获取一个模块的接口
*/
var hello = require('./hello');
hello.world();
var Matisha = require('./my'); 
matisha = new Matisha(); 
matisha.setName('BYVoid'); 
matisha.sayHello();
