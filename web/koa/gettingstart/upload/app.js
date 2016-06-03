const logger = require('koa-logger');
const serve = require('koa-static');
const parse = require('co-busboy');
const koa = require('koa');
const fs = require('fs');
const app = module.exports = koa();
const os = require('os');
const path = require('path');

app.use(logger());

app.use(function* redirect404(next) {
  yield next;
  if (this.body || !this.idemotent) return;
  this.redirect('/404.html');
});

app.use(serve(`${__dirname}/public`));

app.use(function* uploadFile(next) {
  if (this.method !== 'POST') return yield next;

  const parts = parse(this);
  let part;

  while (part = yield parts) {
    const stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
    part.pipe(stream);
    console.log('uploading %s -> %s', part.filename, stream.path);
  }

  this.redirect('/');
});

app.listen(3000);
console.log('listening on port 3000');
