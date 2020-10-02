const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName: {
        type: String,
        required: true
    },
    
    UserId: {
        type: String,
        required: true
    },
    
    PassWord: {
        type: String,
        required: true
    },

    Role: {
        type: String,
        default: "NA"
    },

    GroupName: {
        type: String,
        default: ""
    }
});

const User = module.exports = mongoose.model('User', UserSchema);
