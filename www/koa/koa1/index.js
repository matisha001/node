const Koa = require('koa');
const app = new Koa();

app.use('/', function *() {
    yield doReadFile1();
    var data = yield doReadFile2();
    this.body = data;
});

app.listen(3000)