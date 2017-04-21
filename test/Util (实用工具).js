
var util = require('util');
/*util.inherits
一个基础对象Base 和一个继承自Base 的Sub
Base 有三个在构造函数 内定义的属性和一个原型中定义的函数
通过util.inherits 实现继承。

Sub 仅仅继承了Base 在原型中定义的函数，
而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub)
*/
/*util.inspect

function Person() { 
	this.name = 'byvoid'; 
	this.toString = function() { 
	return this.name; 
	}; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true)); 
console.log(util.inspect(obj, true,1)); 
console.log(util.inspect(obj, true,1,true)); 
*/
/*util.isArray(object)
util.isArray([])
util.isArray(new Array)
util.isArray({})
*/

