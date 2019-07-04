const mongoose = require("mongoose");


ventaSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true
        //type: mongoose.Schema.Types.ObjectId, ref: 'Client'
    },
    date:{
        type: Date,
        required: true
    },
    prducts:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Products'
    },    
    subtotal: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        require: true
    },
    total: {
        type: Number,
        required: true
    }


});

ventaSchema.pre('save', function(next) {
    var self = this;
    self.subt = self.pVenta+self.pVenta;
    self.iv= self.subtotal*1.16;
    self.ttl= self.iva+self.subtotal;
    next();
});

