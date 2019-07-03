const mongoose = require("mongoose");


productoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
       
    },
    pCompra: {
        type: Number,
        required: true
    },
    pVenta: {
        type: Number,
        required: true
    },

   // marca:{ type: Schema.ObjectId, ref: "marca" } ,
   
    
    cantidad: {
        type: Number,
        required: true  
    },
    minimo: {
        type: Number,
        required: true  
    },
    maximo: {
        type: Number,
        required: true  
    }
});
module.exports = mongoose.model("productos", productoSchema);
