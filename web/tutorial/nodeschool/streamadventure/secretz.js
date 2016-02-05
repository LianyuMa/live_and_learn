var crypto = require('crypto'),
    zlib = require('zlib'),
    tar = require('tar'),
    through = require('through'),
    cipherStream = crypto.createDecipher(process.argv[2], process.argv[3]),
    parser = tar.Parse();

parser.on('entry', function (e) {
  function write(buf) {
    this.queue(buf.toString() + ' ' + e.path + '\n');
  }

  if (e.type === 'File') {
    var hash = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hash)
     .pipe(through(write))
     .pipe(process.stdout);
  }
});

process.stdin
 .pipe(cipherStream) // unencrypt
 .pipe(zlib.createGunzip())    // gunzip
 .pipe(parser);  // tarball parser