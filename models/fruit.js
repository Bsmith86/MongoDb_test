const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)


module.exports = Fruit;