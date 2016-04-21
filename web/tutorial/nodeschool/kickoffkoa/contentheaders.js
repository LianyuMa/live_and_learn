const koa = require('koa');
const port = process.argv[2];

const app = koa();

app.use(function* contentType() {
  this.body = this.is('application/json')
  ? { message: 'hi!' }
  : 'ok';
});

app.listen(port);
