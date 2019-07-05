const mongoose = require("mongoose");


module.exports = new mongoose.Schema({
    client: {
        type: String,
        required: true
        //type: mongoose.Schema.Types.ObjectId, ref: 'Client'
    },
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



