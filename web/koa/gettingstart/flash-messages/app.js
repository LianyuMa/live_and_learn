const koa = require('koa');
const rawBody = require('raw-body');
const session = require('koa-session');
const app = module.exports = koa();

app.keys = ['key1', 'key2'];
app.use(session(app));

app.use(function* getMessages(next) {
  if (this.method !== 'GET' || this.path !== '/messages') return yield next;

  const messages = this.session.messages || [];
  this.body = messages;

  delete this.session.messages;
});

app.use(function* postMessages(next) {
  if (this.method !== 'POST' || this.path !== '/messages') return yield next;

  const message = yield rawBody(this.req, { encoding: 'utf8' });

  this.session.messages = this.session.messages || [];
  this.session.messages.push(message);

  this.status = 204;
});

if (!module.parent) app.listen(3000);
