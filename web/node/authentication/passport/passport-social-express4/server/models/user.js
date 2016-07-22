var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user schema
var user = new Schema({
  name: String,
  someID: String
});

module.exports = mongoose.model('users', User);
