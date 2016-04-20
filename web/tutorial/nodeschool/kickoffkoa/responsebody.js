const koa = require('koa');
const fs = require('fs');
const port = process.argv[2];

const app = koa();

app.use(function* requestJSON(next) {
  if (this.path !== '/json') return yield next;
  this.body = { foo: 'bar' };
});

app.use(function* requestStream(next) {
  if (this.path !== '/stream') return yield next;
  this.body = fs.createReadStream(process.argv[3]);
});

app.listen(port);
