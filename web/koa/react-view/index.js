const staticCache = require('koa-static-cache');
const register = require('babel/register');
const react = require('koa-react-view');
const path = require('path');
const koa = module.exports = require('koa');

const app = koa();

const viewpath = path.join(__dirname, 'views');
const assetspath = path.join(__dirname, 'public');

react(app, { views: viewpath });

register({
  only: [
    viewpath,
    assetspath
  ],
});

app.use(staticCache(assetspath));

app.use(function* renderBody() {
  this.render('index', {
    title: 'List',
    list: [
      'hello koa',
      'hello react'
    ],
  });
});

app.listen(3000);
console.log('server start listen at 3000');
