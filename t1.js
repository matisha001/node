//http.js
var http = require("http");
// var t2 =require("./t2.js")
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hello World!");
    response.end();
}).listen(8000);