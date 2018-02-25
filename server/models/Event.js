
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    startDatetime: { type: Date, required: true },
    endDatetime: { type: Date, required: true },
    // fechaCreacion: { type: Date, required: true },
    // tipo: { type: String, required: true },
    // moneda: { type: String, required: true },
    description: String,
    viewPublic: { type: Boolean, required: true }

   
});

module.exports = mongoose.model('Event', eventSchema);