const mongoose = require('mongoose');

const glassesSchema = mongoose.Schema({
    brand: String,
    prescription_right: Number,
    prescription_left: Number,
    type_of_frame: {
        type: String,
        enum: ['flotant', 'pasta', 'metàl·lica']
    },
    frame_color: String,
    glass_color_right: String,
    glass_color_left: String,
    price: Number,
    provider: mongoose.SchemaTypes.ObjectId,
    bought_by: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("Glasses", glassesSchema);