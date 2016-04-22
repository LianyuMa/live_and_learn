const koa = require('koa');
const session = require('koa-session');
const port = process.argv[2];

const app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function* sessionView() {
  const n = ~~this.session.view + 1;
  this.session.view = n;
  this.body = `${n} views`;
});

app.listen(port);
