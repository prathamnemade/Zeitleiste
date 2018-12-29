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
    link = "http://" + host + "/zeitleiste/verify" + "?email=" + req.body.emailID + "&id=" + rand;
    email.mailOptions.to = req.body.emailID;
    email.mailOptions.subject = `${req.body.firstName + " " + req.body.lastName}  ,Please verify your account.`;
    email.mailOptions.html = `
    <div  style="display: inline-table !important;width: auto;margin: auto;">
    <table  style="margin: 0px;border-collapse: collapse;">
        <tbody>
          <tr >
              <td style="padding: 0px;">
                <div style="border-width: 0px 1px 0px 1px;padding: 6px 6px 0px 6px;background: #DBDBBA;">
                <strong>Account Verification Email</strong>
                    <div style="border: 1px solid #808080; padding: 6px; background: #FFFFFF;">
                      Hi  <strong>${req.body.firstName.toUpperCase()}</strong> ,
                      <p style="margin-left: 100px;">You have already registered with us.
                      <br> Thank you for registering with 
                      <strong>Zeitleiste<strong>.
                      <br>
                      Please click on the following link to activate your account. 
                      <br>${link}
                      </p>
                      <div style="text-align: center;">
                          <img src="https://img.icons8.com/color/48/000000/add-user-group-man-man.png" alt="" width="60" height="60">
                      </div><br>
                      <div>Thanks and Regards,
                      <br><strong>Zeitleiste</strong>
                      </div>
                    </div>
                </div>
                <div  style="border-width: 0px 1px 1px 1px;padding: 0px 0px 0px 0px;background: #DBDBBA;height: 6px;text-align: right;"></div>
              </td>
          </tr>
        </tbody>
    </table>
  </div>

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
    registration.registrationID = rand;
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