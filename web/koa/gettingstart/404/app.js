const koa = require('koa');
const app = module.exports = koa();

app.use(function* pageNotFound(next) {
  yield next;

  if (this.status !== 404) return;

  this.status = 404;

  switch (this.accepts('html', 'json')) {
    case 'html':
      this.type = 'html';
      this.body = '<p>Page Not Found</p>';
      break;
    case 'json':
      this.body = {
        message: 'Page Not Found',
      };
      break;
    default:
      this.type = 'text';
      this.body = 'Page Not Found';
  }
});

if (!module.parent) app.listen(3000);
