
function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}
/*
方法一：对module.exports赋值
*/
module.exports = {
    hello: hello,
    greet: greet
};

/*
方法二：直接使用exports

不可以直接对exports赋值
// 代码可以执行，但是模块并没有输出任何变量:
exports = {
    hello: hello,
    greet: greet
}
*/

exports.hello = hello;
exports.greet = greet


exports.foo = function () { return 'foo'; };


module.exports.foo = function () { return 'foo'; };


// 要输出的是一个函数或数组，那么，只能给module.exports赋值：

module.exports = function () { return 'foo'; };
// 给exports赋值是无效的，因为赋值后，module.exports仍然是空对象{}。

module.exports = {
    foo: function () { return 'foo'; }
};
// 如果要输出一个键值对象{}，可以利用exports这个已存在的空对象{}，并继续在上面添加新的键值；

// 如果要输出一个函数或数组，必须直接对module.exports对象赋值。

// module.exports赋值，可以应对任何情况：