var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Credentials = mongoose.model('Credentials');

passport.use(new LocalStrategy({
  usernameField: 'email'
},
  function (username, password, done) {
    Credentials.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not registered ! Click on \'Register\' to join us.'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Username/Password is wrong ! '
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));