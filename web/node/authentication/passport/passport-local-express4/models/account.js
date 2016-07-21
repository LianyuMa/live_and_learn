var mongoose = require('mogoose');
var Schema = mogoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
  username: String,
  password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mogoose.model('Account', Account);
