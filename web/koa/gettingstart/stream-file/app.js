const koa = require('koa');
const fs = require('fs');
const app = module.exports = koa();
const path = require('path');
const extname = path.extname;

function stat(file) {
  return (done) => {
    fs.stat(file, done);
  };
}

app.use(function* writeFile() {
  const fpath = __dirname + this.path;
  const fstat = yield stat(fpath);

  if (fstat.isFile()) {
    this.type = extname(fpath);
    this.body = fs.createReadStream(fpath);
  }
});

if (!module.parent) app.listen(3000);
