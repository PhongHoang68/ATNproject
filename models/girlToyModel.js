const mongoose = require('mongoose');

var girlToyScheme = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    // vid: String
    // gender: String

})

var girltoyModel = mongoose.model( "Girl'sToy",girlToyScheme, "girltoy")

module.exports = girltoyModel;