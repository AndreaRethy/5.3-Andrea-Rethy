const mongoose = require('mongoose');
const Address = require('./Address');

const supplierSchema = mongoose.Schema({
    name: String,
    address: Address,
    telephone: Number,
    fax: Number,
    NIF: String
});

module.exports = mongoose.model("Suppliers", supplierSchema);