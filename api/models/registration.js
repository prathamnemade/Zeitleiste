var mongoose = require('mongoose');
var crypto = require('crypto');
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
    },
    hash: String,
    salt: String,
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    registered:{
        type: String,
        required: true
    },
    registrationID:{
        type:String,
        required: true
    },
    avatarExists:{
        type:Boolean,
        required:true
    }
});
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};
mongoose.model('Registration', userSchema);
