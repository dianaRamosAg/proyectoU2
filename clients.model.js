const mongoose = require("mongoose");

module.exports  = new mongoose.Schema({
    RFC: {
        type: String,
        required: true,
        match: /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cell: {
        type: String,
        required: true,
        match:/^([0-9]{5})+(-){0,1}([0-9]{5})$/i
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    }
});
