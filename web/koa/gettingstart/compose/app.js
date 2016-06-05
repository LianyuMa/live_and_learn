const compose = require('koa-compose');
const koa = require('koa');
const app = module.exports = koa();

function* responseTime(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', `${ms}ms`);
}

function* logger(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  if (process.env.NODE_ENV !== 'test') {
    console.log('%s %s - %sms', this.method, this.url, ms);
  }
}

function* respond(next) {
  yield next;
  if (this.url !== '/') return;
  this.body = 'Hello World';
}

const all = compose([
  responseTime,
  logger,
  respond,
]);

app.use(all);

if (!module.parent) app.listen(3000);
