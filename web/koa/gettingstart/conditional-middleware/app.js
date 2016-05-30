const koa = require('koa');
const logger = require('koa-logger');
const app = koa();

function ignoreAsserts(mw) {
  return function* (next) {
    if (/(\.js|\.css|\.ico)$/.test(this.path)) {
      yield next;
    } else {
      yield mw.call(this, next);
    }
  }
}

app.use(ignoreAsserts(logger()));

app.use(function* () {
  this.body = 'Hello world!';
});

app.listen(3000);
