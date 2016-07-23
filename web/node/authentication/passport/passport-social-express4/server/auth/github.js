var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

var User = require('../models/user');
var config = require('../_config');
var init = require('./init');

passport.use(new GithubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    var searchQuery = {
      name: profile.displayName
    };

    var updates = {
      name: profile.displayName,
      someID: profile.id
    };

    var options = {
      upsert: true
    }

    // update the user if s/he exsits or add a new user
    User.findOneAndUpdate(searchQuery, updates, function(err, user) {
      if (err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }
));

// serialize user into the session
init();

module.exports = passport;
