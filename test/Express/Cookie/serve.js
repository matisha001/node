var express      = require('express')
var cookieParser = require('cookie-parser')
 //一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
})
 
app.listen(8081)