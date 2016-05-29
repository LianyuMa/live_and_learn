const koa = require('koa');
const auth = require('koa-basic-auth');
const app = module.exports = koa();

app.use(function* UnauthHandling(next) {
  try {
    yield* next;
  } catch (err) {
    if (err.status === 401) {
      this.status = 401;
      this.body = 'can\'t haz that';
    } else {
      throw err;
    }
  }
});

app.use(auth({ name: 'tj', pass: 'tobi' }));

app.use(function* writeContent() {
  this.body = 'secret';
});

if (!module.parent) app.listen(3000);
