const koa = require('koa');
const parse = require('co-body');
const app = module.exports = koa();

app.use(function* uppercaseBody(next) {
  if (this.method !== 'POST') return yield next;
  const body = yield parse(this, { limit: '1kb' });
  if (!body.name) this.throw(400, '.name required');
  this.body = { name: body.name.toUpperCase() };
});

if (!module.parent) app.listen(3000);
