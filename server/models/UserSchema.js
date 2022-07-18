const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "email required"]
    },
    password: {
        type: String,
        required: [true, "password required"],
        unique: true
    }
});

userSchema.plugin(uniqueValidator);

userSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.password, 5, function(err, hash){
        user.password = hash;
        next();
    })
})

const user = mongoose.model('user', userSchema);

module.exports = user;