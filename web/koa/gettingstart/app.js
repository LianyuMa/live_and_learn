const koa = require('koa');
const app = koa();

app.use(function* (next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', `${ms}ms`);
});

app.use(function* (next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function* () {
  this.body = 'Hello world!';
});

app.listen(3000);
