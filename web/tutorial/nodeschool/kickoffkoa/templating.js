const views = require('co-views');
const koa = require('koa');
const app = module.exports = koa();
const port = process.argv[2];

const render = views(`${__dirname}/views`, {
  ext: 'ejs',
});

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk',
  },
  species: 'ferret',
  age: 3,
};

app.use(function* renderUser() {
  this.body = yield render('user', { user });
});

app.listen(port);
