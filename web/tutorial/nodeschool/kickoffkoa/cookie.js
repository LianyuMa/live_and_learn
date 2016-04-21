const koa = require('koa');
const port = process.argv[2];

const app = koa();

app.keys = ['secret', 'keys'];

app.use(function* setCookie() {
  const n = ~~this.cookies.get('view', { signed: true }) + 1;
  this.cookies.set('view', n, { signed: true });
  this.body = `${n} views`;
});

app.listen(port);
