const mongoose = require('mongoose');
const { stringify } = require('querystring');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    user_pconfirme: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;