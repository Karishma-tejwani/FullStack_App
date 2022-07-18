const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email required"],
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

const product = mongoose.model('product', productSchema);

module.exports = product;