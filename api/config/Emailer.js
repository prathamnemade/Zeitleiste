let emailer = {};

var nodemailer = require('nodemailer');
emailer.smtpTrans = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "zeitleiste4u@gmail.com",
        pass: "zeitleiste@123"
    }
});

emailer.mailOptions = {
    from: 'zeitleiste4u@gmail.com'
};

emailer.sendMail=function(){
    emailer.smtpTrans.sendMail(emailer.mailOptions, function(err){
        if(!err){
            console.log('email has been sent')
        }else {
            throw err;
        }
    })

}

module.exports = emailer;