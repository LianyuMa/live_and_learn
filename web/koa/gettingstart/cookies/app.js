const koa = require('koa');
const app = module.exports = koa();

app.use(function* getViews() {
  const n = ~~this.cookies.get('view') + 1;
  this.cookies.set('view', n);
  this.body = `${n} views`;
});

if (!module.parent) app.listen(3000);
