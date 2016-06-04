const compose = require('koa-compose');
const koa = require('koa');
const app = module.exports = koa();

function composer(ap) {
  const middleware = ap instanceof koa ? ap.middleware : ap;
  return compose(middleware);
}

const wwwSubdomain = composer(require('./apps/koa'));
const barSubdomain = composer(require('./apps/array'));

app.use(function* gLog(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  if (process.env.NODE_ENV !== 'test') {
    console.log('%s %s %s - %sms', this.host, this.method, this.url, ms);
  }
});

app.use(function* switchDomain(next) {
  switch (this.hostname) {
    case 'example.com':
    case 'www.example.com':
      return yield wwwSubdomain.call(this, next);
    case 'bar.example.com':
      return yield barSubdomain.call(this, next);
    default:
      return;
  }
});

if (!module.parent) app.listen(3000);
