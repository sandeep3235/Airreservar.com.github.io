// flight.js

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: String,
    departureTime: Date,
    arrivalTime: Date,
    travelTime: String,
    layovers: Number,
    price: Number,
    // Add more fields as needed
});

module.exports = mongoose.model('Flight', flightSchema);
