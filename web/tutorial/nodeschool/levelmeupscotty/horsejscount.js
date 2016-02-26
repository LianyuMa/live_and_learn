"use strict";

module.exports = function (db, date, callback) {
  var tweetsCount = 0,
      readStream  = db.createReadStream({ start: date });

  readStream.on('data', function () {
    tweetsCount++;
  })
  .on('error', function (err) {
      callback(err);
  })
  .on('end', function () {
      callback(null, tweetsCount);
  });
};