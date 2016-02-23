module.exports = function (db, date, callback) {
  var tweetsCount = 0;
  var readStream = db.createReadStream({ start: date });

  readStream.on('data', function (err, data) {
    tweetsCount++;
  });

  readStream.on('error', function (err) {
      callback(err);
  });

  readStream.on('end', function () {
      callback(null, tweetsCount);
  });
};