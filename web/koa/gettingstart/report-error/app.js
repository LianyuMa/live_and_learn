const koa = require('koa');
const app = module.exports = koa();

app.use(function* emitErr(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.type = 'html';
    this.body = '<p>Something <em>exploded</em>.</p>';
    this.app.emit('error', err, this);
  }
});

app.use(function* throwErr() {
  throw new Error('boom boom');
});

app.on('error', (err) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`sent error ${err.message} to the cloud`);
    console.log(err);
  }
});

if (!module.parent) app.listen(3000);
