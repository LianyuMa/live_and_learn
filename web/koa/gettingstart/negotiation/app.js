const koa = require('koa');
const app = module.exports = koa();

const cyclops = {
  _id: '001',
  name: 'cyclops',
  formerly: 'Scott Summers',
};

const phoenix = {
  _id: '002',
  name: 'phoenix',
  formerly: 'Jean Gray',
};

const xmen = { cyclops, phoenix };

app.use(function* renderBody(next) {
  yield next;
  if (!this.body) return;
  const type = this.accepts('json', 'html', 'xml', 'text');
  if (type === false) this.throw(406);
  if (type === 'json') return;
  if (type === 'xml') {
    this.type = 'html';
    this.body = `<h1>${this.body.name}</h1>`;
    return;
  }

  this.type = 'text';
  this.body = this.body.name;
});

app.use(function* removeId(next) {
  yield next;
  if (!this.body) return;
  delete this.body._id;
});

app.use(function* getName() {
  const name = this.path.slice(1);
  const xman = xmen[name];
  this.body = xman;
});

if (!module.parent) app.listen(3000);
