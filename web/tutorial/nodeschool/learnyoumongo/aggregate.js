const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/learnyoumongo';
const getSize = process.argv[2];

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  const prices = db.collection('prices');
  prices.aggregate([
    { $match: { size: getSize } },
    { $group: {
      _id: 'average',
      average: {
        $avg: '$price',
      },
    } },
  ]).toArray((err, results) => {
    assert.equal(null, err);
    console.log(Number(results[0].average).toFixed(2));
    db.close();
  });
});
