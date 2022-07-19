const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
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

const user = mongoose.model('user', userSchema);

module.exports = user;