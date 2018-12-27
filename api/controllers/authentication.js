var passport = require('passport');
var mongoose = require('mongoose');
var Credentials = mongoose.model('Credentials');
var Registration = mongoose.model('Registration');
var email = require('../config/Emailer')
var rand, host, link;
module.exports.register = function (req, res) {
  console.log(req.get('host'))
  //to send the mail
  rand = Math.floor((Math.random() * 100) + 54);
  host = req.get('host');
  link = "http://" + host + "/verify?id=" + rand;
  email.mailOptions.to = req.body.emailID;
  email.mailOptions.subject = `${req.body.firstName + " " + req.body.lastName}  ,Please verify your account.`;
  email.mailOptions.html = `
                    <h4>Account Verification Email</h4>
                    <p style="margin:4px;">Hi ${req.body.firstName}</p>
                    <p style="margin:4px;">Thanks for Signing Up with Zeitleiste.</p>
                    <p style="margin:4px;">You must follow this link to activate your account</p>
                    <p>${link}</p>
                    <p style="margin-bottom:4px;">Thanks and Regards</p>
                    <p style="margin-top:4px;">Zeitleiste</p>
                    `;
  email.sendMail();
  var credentials = new Credentials();
  var registration = new Registration();
  //to save registration data in registration table
  registration.email = req.body.emailID;
  registration.firstname = req.body.firstName;
  registration.lastname = req.body.lastName;
  registration.gender = req.body.gender;
  registration.birthday = req.body.birthday;
  registration.registered = 'N';
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
module.exports.verifyEmail = function (req, res) {
  console.log(req.protocol + ":/" + req.get('host'));
  if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
    console.log("Domain is matched. Information is from Authentic email");
    if (req.query.id == rand) {
      console.log("email is verified");
      // res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
      // Registration.replaceOne
    }
    else {
      console.log("email is not verified");
      res.end("<h1>Bad Request</h1>");
    }
  }
  else {
    res.end("<h1>Request is from unknown source");
  }

}
module.exports.checkRegister = function (req, res) {
  console.log("user ", req.body);
  Credentials.findOne({ 'email': req.body.email }).count().exec(function (err, data) {
    console.log("zzz", data)
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