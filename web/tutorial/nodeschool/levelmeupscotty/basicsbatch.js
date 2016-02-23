var level = require('level');
var db = level(process.argv[2]);
var fs = require('fs');
var filePath = process.argv[3];

fs.readFile(filePath, {encoding: 'utf8'}, function(err, data) {
  if (err) return err;
  var lines = data.split('\n');
  var batchCommands = [];
  lines.forEach(function(line) {
    var parts = line.split(',');
    if (parts[0] == 'put') {
      batchCommands.push({
        type : 'put',
        key  : parts[1],
        value: parts[2]
      });
    }
    else if (parts[0] == 'del') {
      batchCommands.push({
        type: 'del',
        key : parts[1]
      });
    }
  });

  db.batch(batchCommands);
  db.close();
});