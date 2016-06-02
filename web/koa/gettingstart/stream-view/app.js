const koa = require('koa');
const View = require('./view');
const app = module.exports = koa();

app.use(function* createView() {
  this.type = 'html';
  this.body = new View(this);
});

if (!module.parent) app.listen(3000);
