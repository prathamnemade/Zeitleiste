var mongoose = require('mongoose');
var Registration = mongoose.model('Registration');
module.exports.checkAvatarExists = function (req, res) {
    console.log("avatar",req.body)
    Registration.findOne({"email":req.body.emailId}).exec(function(err,data){
        res.status(200);
        res.json({
            "avatarExists":data.avatarExists,
            // "firstname":data.firstname,
            // "lastname":data.lastname,
            // "gender":data.gender,
            // "birthday":data.email
        });
    })
};

module.exports.getDataforSetAvatar = function (req, res) {
    Registration.findOne({"email":req.body.email}).exec(function(err,data){
        console.log("res",data);
        res.status(200);
        res.json({
            "email":data.email,
            "firstname":data.firstname,
            "lastname":data.lastname,
            "gender":data.gender,
            "birthday":data.email
        });
    })
};