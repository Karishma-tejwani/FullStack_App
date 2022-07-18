const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email required"],
        unique: true
    },
    job: {
        type: String,
        required: [true, "job required"]
    },
    phone: {
        type: Number,
        required: [true, "phone number required"]
    },
    address: {
        type: String,
        required: [true, "address required"]
    },
});

const user = mongoose.model('user', userSchema);

module.exports = user;