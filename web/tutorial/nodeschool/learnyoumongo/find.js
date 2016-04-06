const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/learnyoumongo';
const getAge = process.argv[2];

const findDocuments = (db, callback) => {
  db.collection('parrots').find({
    age: {
      $gt: +getAge,
    },
  }).toArray((err, docs) => {
    assert.equal(err, null);
    if (docs !== null) {
      console.log(docs);
    } else {
      callback();
    }
  });
};

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  findDocuments(db, () => {
    db.close();
  });
});

// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]

// var url = 'mongodb://localhost:27017/learnyoumongo'

// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var parrots = db.collection('parrots')
//   parrots.find({
//     age: {
//       $gt: +age
//     }
//   }).toArray(function(err, docs) {
//     if (err) throw err
//     console.log(docs)
//     db.close()
//   })
// })
