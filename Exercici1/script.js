const mongoose = require('mongoose');
const Customer = require("./schemas/Customer");
const Glasses = require('./schemas/Glasses');

mongoose.connect("mongodb://localhost/opticadb");

run()
async function run() {
    try {
        const glasses = await Glasses.create({
            brand: "Rayban",
            prescription_right: 2.0,
            prescription_left: 2.3,
            type_of_frame: 'metàl·lica',
            price: 127.0
        });
        const customer = await Customer.create({
            name: "Client Name",
            address: {
                street: "Right Street",
                number: 123,
            },
            email: "email@email.com",
            purchases: [glasses._id]
        });
        console.log(glasses);
        console.log(customer);
    } catch (e) {
        console.log(e.message)
    }
}