const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        number: Number,
        floor: Number,
        door: Number,
        city: String,
        postal_code: String,
        country: String
     },
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
    },
    purchases: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("Customer", customerSchema);