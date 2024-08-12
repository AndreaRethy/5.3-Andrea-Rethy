const mongoose = require('mongoose');
const Customer = require("./schemas/Customer")

mongoose.connect("mongodb://localhost/opticadb");

run()
async function run() {
    try {
        const user = await Customer.create({
            name: "Andrea",
            age: 33,
            email: "andi@mail.com",
        })
        // const user = new User({ name: "Andrea", age: 33 })
        // await user.save()
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}