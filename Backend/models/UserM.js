const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: { 
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    },
    isAdmin: {
        type: Boolean,
        require: true,
    }

})
userSchema.plugin(uniqueValidator)
const User = mongoose.model('User',userSchema);

module.exports = User;
