const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    address: String ,

    isAdmin: {
        type: Boolean,
        required: true,
    }

})
const User = mongoose.model('User',userSchema);

module.exports = User;
