//index.js
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {}//
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route, handle);

//requestHandlers.js
function start() {
    console.log("Request handler 'start' was called.");
}
function upload() {
    console.log("Request handler 'upload' was called.");
}
exports.start = start;
exports.upload = upload;

//router.js
function route(handle, pathname) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }
}
exports.route = route;
/*
先检查给定的路径对应的请求处理程序是否存在，如果存在的话直接调用相应的函数。
可以用从关联数组中获取元素一样的方式从传递的对象中获取请求处理函数，
因此就有了简洁流畅的形如handle[pathname]();的表达式
*/

// server.js
var http = require("http");
var url = require("url");
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
exports.start = start;