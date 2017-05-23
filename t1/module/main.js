'use strict';

// 引入hello模块:
var greet = require('hello');

var s = 'Michael';

greet(s); // Hello, Michael!


/*
// 如果只写模块名 var greet = require('hello');
Node会依次在内置模块、全局模块和当前模块下查找hello.js
*/

