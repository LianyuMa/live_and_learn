const koa = require('koa');
const app = module.exports = koa();

app.use(function* responseTime(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', `${ms}ms`);
});

app.use(function* logger(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log('%s %s %s - %sms', this.method, this.originalUrl, this.status, ms);
});

app.use(function* contentLength(next) {
  yield next;
  if (!this.body) return;
  this.set('Content-Length', this.body.length);
});

app.use(function* respond(next) {
  yield next;
  if (this.path !== '/') return;
  this.body = 'Hello world!';
});

if (!module.parent) app.listen(3000);
