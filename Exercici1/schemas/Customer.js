const mongoose = require('mongoose');
const Address = require('./Address');

const customerSchema = new mongoose.Schema({
    name: String,
    address: Address,
    telephone: Number,
    email: {
        type: String,
        minLength: 10,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date().now
    }
});

module.exports = mongoose.model("Customer", customerSchema);