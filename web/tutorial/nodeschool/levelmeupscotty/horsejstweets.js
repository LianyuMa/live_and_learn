module.exports = function (db, day, callback) {
  var readStream = db.createReadStream({ start: day, end: day + '\xff' });
  var tweets = [];
  readStream.on('data', function (data) {
    tweets.push(data.value);
  });

  readStream.on('error', function (err) {
      callback(err);
  });

  readStream.on('end', function () {
      callback(null, tweets);
  });
};