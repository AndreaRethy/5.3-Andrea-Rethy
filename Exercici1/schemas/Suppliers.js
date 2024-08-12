const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
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
    fax: Number,
    NIF: String
});

module.exports = mongoose.model("Suppliers", supplierSchema);