const koa = require('koa');
const parse = require('co-body');
const session = require('koa-session');
const csrf = require('koa-csrf');
const route = require('koa-route');
const app = module.exports = koa();

app.keys = ['session key', 'csrf example'];
app.use(session(app));

app.use(function* parseBody(next) {
  if (this.is('application/json')) {
    this.request.body = yield parse(this);
  }
  yield* next;
});

app.use(csrf());

app.use(route.get('/token', token));
app.use(route.post('/post', post));

function* token () {
  this.body = this.csrf;
}

function* post () {
  this.body = { ok: true };
}

if (!module.parent) app.listen(3000);
