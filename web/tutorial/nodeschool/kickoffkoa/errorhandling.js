const koa = require('koa');
const port = process.argv[2];

const app = koa();

function errorHandler() {
  return function* genErrHandler(next) {
    try {
      yield next;
    } catch (err) {
      this.status = 500;
      this.body = 'internal server error';
    }
  };
}

app.use(errorHandler());

app.use(function* requestError() {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

app.listen(port);
