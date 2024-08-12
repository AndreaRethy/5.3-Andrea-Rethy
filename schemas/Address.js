const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
   street: String,
   number: Number,
   floor: Number,
   door: Number,
   city: String,
   postal_code: String,
   country: String
});

module.exports = mongoose.model("Address", addressSchema);