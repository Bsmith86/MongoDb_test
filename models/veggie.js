const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const veggieSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})

const Veggie = mongoose.model('MyVeggie', veggieSchema)


module.exports = Veggie;