'use strict';

module.exports.init = function (db, words, callback) {
  var batchCommands = words.map(function (word) {
    var key = word.length + '!' + word;
    return { type: 'put', key: key, value: word };
  });

  db.batch(batchCommands, callback);
};

module.exports.query = function (db, word, callback) {
  var key = word.length + '!' + word.replace(/\*/g, ''),
      arr = [],
      readStream = db.createReadStream({ start: key, end: key + '\xff' })
      ;

  readStream.on('data', function (data) {
    arr.push(data.value);
  });
  readStream.on('error', function (err) {
    callback(err);
  });
  readStream.on('end', function () {
    callback(null, arr);
  });
};