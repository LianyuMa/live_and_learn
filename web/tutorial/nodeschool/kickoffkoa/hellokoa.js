const koa = require('koa');
const app = koa();
const port = process.argv[2];

app.use(function* greeting() {
  this.body = 'hello koa';
});

app.listen(port);
