var passport = require('passport');
var mongoose = require('mongoose');
var Credentials = mongoose.model('Credentials');

module.exports.checkRegister = function (req, res) {
  Credentials.findOne({ 'email': req.body.email }).count().exec(function (err, data) {
    res.json(data);
  })
}
module.exports.login = function (req, res) {
  passport.authenticate('local', function (err, credentials, info) {
    var token;
    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }
    // If a credentials is found
    if (credentials) {
      token = credentials.generateJwt();
      res.status(200);
      res.json({
        "token": token
      });
    } else {
      // If credentials is not found
      res.status(401).json(info);
    }
  })(req, res);

};