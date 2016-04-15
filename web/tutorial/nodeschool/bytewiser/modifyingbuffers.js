process.stdin.on('data', (buf) => {
  var i = 0;
  for (i; i < buf.length; i++) {
    if (buf[i] === '.'.charCodeAt(0)) buf[i] = '!'.charCodeAt(0);
  }
  console.log(buf);
});
