var passport = require('passport');
var mongoose = require('mongoose');
var Credentials = mongoose.model('Credentials');
var Registration = mongoose.model('Registration');
// var sendJSONresponse = function (res, status, content) {
//   res.status(status);
//   res.json(content);
// };

module.exports.register = function (req, res) {
  // console.warn("****", req);

  var credentials = new Credentials();
  var registration = new Registration();
  //to save registration data in registration table
  registration.email = req.body.emailID;
  registration.firstname = req.body.firstName;
  registration.lastname = req.body.lastName;
  registration.gender = req.body.gender;
  registration.birthday = req.body.birthday;
  registration.registered="N"
  registration.setPassword(req.body.password);
  registration.save();
  credentials.name = req.body.firstName + " " + req.body.lastName;
  credentials.email = req.body.emailID;
  credentials.setPassword(req.body.password);
  //following will save the data and will call the callback function.In response it will return the token to UI side
  credentials.save(function (err) {
    var token;
    token = credentials.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });

};
module.exports.checkRegister = function (req, res) {
  console.log("user ", req.body);
  Credentials.findOne({ 'email': req.body.email }).count().exec(function (err, data) {
    console.log("zzz", data)
    res.json(data);
  })

}
module.exports.login = function (req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

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