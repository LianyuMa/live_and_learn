const koa = require('koa');
const app = koa();
const port = process.argv[2];

app.use(function* routingDefault(next) {
  if (this.path !== '/') return yield next;
  this.body = 'hello koa';
});

app.use(function* routing404(next) {
  if (this.path !== '/404') return yield next;
  this.body = 'page not found';
});

app.use(function* routing500(next) {
  if (this.path !== '/500') return yield next;
  this.body = 'internal server error';
});

app.listen(port);
