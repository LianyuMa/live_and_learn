const koa = require('koa');
const port = process.argv[2];

const app = koa();

function responseTime() {
  return function* genRespTime(next) {
    const start = new Date;
    yield next;
    this.set('X-Response-Time', new Date - start);
  };
}

function upperCase() {
  return function* genUpperCase(next) {
    yield next;
    this.body = this.body.toUpperCase();
  };
}

app.use(responseTime());
app.use(upperCase());

app.use(function* greetingBody() {
  this.body = 'hello koa';
});

app.listen(port);
