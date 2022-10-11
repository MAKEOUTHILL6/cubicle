const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});


const User = mongoose.model('User', userSchema);


userSchema.pre('save', function(next) {
    
});

exports.User = User;