var querystring= require('querystring');
//querystring.stringify
var result = querystring.stringify({name:'matsiha',cool:['weixin', 'qq']});
console.log(result);


var result = querystring.stringify({foo:'test',color:['red', 'blue']},'*','$');
console.log(result);

//querystring.parse
var result = querystring.parse('name=matsiha&cool=weixin&cool=qq');
console.log(result);

var result = querystring.parse('foo@bar$cool@xux$cool@yys','@','$');
console.log(result);