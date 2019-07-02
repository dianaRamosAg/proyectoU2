const mongoose = require("mongoose");


marcaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    creador: {
        type: String,
        required: true
    }
});

module.exports = marcaSchema;