const koa = require('koa');
const app = koa();

app.use(function* setReq(next) {
  yield next;
  this.set('X-Custom', 'Dub Dub Dub App');
});

app.use(function* setBody(next) {
  yield next;
  if ('/' !== this.url) return;
  this.body = 'Hello from www app';
});

module.exports = app;
