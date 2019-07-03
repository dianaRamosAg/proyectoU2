const mongoose = require("mongoose");


productoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true  
    },
    min: {
        type: Number,
        required: true  
    },
    max: {
        type: Number,
        required: true  
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Brand'
    }
});
module.exports = mongoose.model("products", productoSchema);
