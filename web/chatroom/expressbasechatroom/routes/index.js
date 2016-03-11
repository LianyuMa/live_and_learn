var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



var hash = require('../bin/pass').hash;
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');
var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  salt    : String,
  hash    : String
});

var User = mongoose.model('users', UserSchema);

function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);

    User.findOne({
        username: name
    },

    function (err, user) {
        if (user) {
            if (err) return fn(new Error('cannot find user'));
            hash(pass, user.salt, function (err, hash) {
                if (err) return fn(err);
                if (hash == user.hash) return fn(null, user);
                fn(new Error('invalid password'));
            });
        } else {
            return fn(new Error('cannot find user'));
        }
    });

}

function requiredAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

function userExist(req, res, next) {
    console.log('userExist endtered');
    User.count({
        username: req.body.username
    }, function (err, count) {
        console.log('count: ' + count);
        if (count === 0) {
            next();
        } else {
            req.session.error = "User Exist"
            res.redirect("/signup");
        }
    });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
    console.log('From router get ' + req.session.user);
    res.render('index');
  }
  else {
    res.render('login');
    // res.send("<a href='/login'> Login</a>" + "<br>" + "<a href='/signup'> Sign Up</a>");
    console.log('login + signup');
  }
});

router.get('/signup', function(req, res) {

  console.log('get signup');

  if (req.session.user) {
    res.redirect('/');
  }else {
    res.render('signup');
    // res.render('login', {action: 'submit'});
  }
});

router.post('/signup', userExist, function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  console.log('signup entered');

  hash(password, function(err, salt, hash) {
    if (err) {throw err;}
    var user = new User({
      username: username,
      salt: salt,
      hash: hash
    }).save(function(err, newUser) {
      authenticate(newUser.username, password, function(err, user) {
        if (user) {
          req.session.regenerate(function() {
            req.session.user = user;
            req.session.success = 'Authenticated as ' + user.username + ' click to <a href="/logout">logout</a>. ' + ' You may now access <a href="/restricted">/restricted</a>.';
            res.redirect('/');
          });
        }
      });
    });
  });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post("/login", function (req, res) {
    authenticate(req.body.username, req.body.password, function (err, user) {
        if (user) {

            req.session.regenerate(function () {

                req.session.user = user;
                req.session.success = 'Authenticated as ' + user.username + ' click to <a href="/logout">logout</a>. ' + ' You may now access <a href="/restricted">/restricted</a>.';
                console.log('login success');
                res.redirect('/');
            });
        } else {
            req.session.error = 'Authentication failed, please check your ' + ' username and password.';
            res.redirect('/login');
        }
    });
});

router.get('/logout', function (req, res) {
    req.session.destroy(function () {
        res.redirect('/');
    });
});





module.exports = router;
