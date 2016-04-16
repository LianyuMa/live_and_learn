var buffer = [];

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) buffer.push(chunk);
});

process.stdin.on('end', () => {
  console.log(Buffer.concat(buffer));
});
