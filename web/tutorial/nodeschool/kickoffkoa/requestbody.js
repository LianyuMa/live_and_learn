const koa = require('koa');
const port = process.argv[2];
const parse = require('co-body');
const app = koa();

app.use(function* postReq(next) {
  if (this.method !== 'POST') return yield next;
  const body = yield parse(this, { limit: '1kb' });
  if (!body.name) this.throw(400, '.name required');
  this.body = body.name.toUpperCase();
});

app.listen(port);
