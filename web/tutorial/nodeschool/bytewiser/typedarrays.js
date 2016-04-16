process.stdin.once('data', (buf) => {
  var uint8View = new Uint8Array(buf);
  console.log(JSON.stringify(uint8View));
});
