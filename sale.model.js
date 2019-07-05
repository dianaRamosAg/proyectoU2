const mongoose = require("mongoose");


module.exports = new mongoose.Schema({
    date:{
        type: Date,
        //required: true
    },
    prduct:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Products'
    },    
    subtotal: {
        type: Number,
        //required: true
    },
    iva: {
        type: Number,
       // require: true
    },
    total: {
        type: Number,
        //required: true
    }


});



