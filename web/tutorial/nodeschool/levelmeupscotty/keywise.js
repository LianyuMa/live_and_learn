var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' }); //'keyEncoding' and 'valueEncoding' (string, default: 'utf8'): The encoding of the keys and values passed through Node.js' Buffer implementation (see Buffer#toString()).'utf8' is the default encoding for both keys and values so you can simply pass in strings and expect strings from your get() operations. You can also pass Buffer objects as keys and/or values and conversion will be performed.Supported encodings are: hex, utf8, ascii, binary, base64, ucs2, utf16le.'json' encoding is also supported, see below.
var data = require(process.argv[3]);

var operations = data.map(function (row) {
  var key;
  if (row.type == 'user') {
    key = row.name;
  } else if (row.type == 'repo') {
    key = row.user + '!' + row.name;
  }

  return { type: 'put', key: key, value: row };
});

db.batch(operations);