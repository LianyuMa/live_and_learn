"use strict";

module.exports = function (db, day, callback) {
  var readStream = db.createReadStream({ start: day, end: day + '\xff' }),
      tweets     = [];
  readStream.on('data', function (data) {
    tweets.push(data.value);
  })
  .on('error', function (err) {
      callback(err);
  })
  .on('end', function () {
      callback(null, tweets);
  });
};