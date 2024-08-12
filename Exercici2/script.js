const mongoose = require('mongoose');
const Customer = require("../schemas/Customer");
const Glasses = require('../schemas/Glasses');
const Suppliers = require('../schemas/Suppliers');

mongoose.connect("mongodb://localhost/opticadb");

run()
async function run() {
    try {
        const provider = await Suppliers.create({
            name: "Googles Associated SL",
            "address": {
                "street": "Martin Brooks",
                "number": "304",
                "floor": 6,
                "door": 39,
                "city": "West Kathrynmouth",
                "postal_code": "02166",
                "country": "Libyan Arab Jamahiriya"
            },
        "telephone": "3703352917",
        "fax": "9640459607422",
        "NIF": "337-44-3443"
        });
        const customer = await Customer.create({
            name: "Client Name",
            address: {
                street: "Right Street",
                number: 123,
            },
            email: "email@email.com"
        });
        const glasses = await Glasses.create({
            brand: "Brand",
            type_of_frame: 'metàl·lica',
            price: 105.75,
            provider: provider._id,
            bought_by: [customer._id]
        });
        console.log(provider);
        console.log(customer);
        console.log(glasses);
    } catch (e) {
        console.log(e.message)
    }
}