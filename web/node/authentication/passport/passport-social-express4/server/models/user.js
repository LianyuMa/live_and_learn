var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create User schema
var User = new Schema({
  name: String,
  someID: String
});

module.exports = mongoose.model('users', User);
