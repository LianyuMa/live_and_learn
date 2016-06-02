const koa = require('koa');
const views = require('co-views');
const app = module.exports = koa();

const render = views(`${__dirname}/views`, { ext: 'ejs' });

const user = {
  name: {
    first: 'Alex',
    last: 'Ma',
  },
  career: 'developer',
  field: 'web',
};

app.use(function* renderView() {
  this.body = yield render('user', { user });
});

if (!module.parent) app.listen(3000);
