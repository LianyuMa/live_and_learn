const render = require('./lib/render');
const logger = require('koa-logger');
const route = require('koa-route');
const parse = require('co-body');
const koa = require('koa');
const app = module.exports = koa();

const posts = [];

app.use(logger());

app.use(route.get('/', list));
app.use(route.get('/post/new', add));
app.use(route.get('/post/:id', show));
app.use(route.post('/post', newPost));

function* list() {
  this.body = yield render('list', { posts });
}

function* add() {
  this.body = yield render('new');
}

function* show(id) {
  const post = posts[id];
  if (!post) this.throw(404, 'invalid post id');
  this.body = yield render('show', { post });
}

function* newPost() {
  const post = yield parse(this);
  const id = posts.push(post) - 1;
  post.created_at = new Date;
  post.id = id;
  this.redirect('/');
}

app.listen(3000);
console.log('listening on port 3000');
