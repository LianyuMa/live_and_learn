var fs = require('fs');
var fp = process.argv[2];
var offset = 0;

fs.readFile(fp, (err, data) => {
  var i = 0;
  if (err) throw err;
  for (i; i < data.length; i++) {
    if (data[i] === '\n'.charCodeAt(0)) {
      console.log(data.slice(offset, i));
      i++;
      offset = i;
    }
  }
  console.log(data.slice(offset, i));
});
