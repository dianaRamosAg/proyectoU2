const mongoose = require("mongoose");
clienteSchema = new mongoose.Schema({
    RFC: {
        type: String,
        required: true,
        match: /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/
    },
    nombre: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        match:/^([0-9]{5})+(-)+([0-9]{6})$/
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    }
});

module.exports = clienteSchema;