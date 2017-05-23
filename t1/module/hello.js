'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;

/*
一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，
一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量。

一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。

*/