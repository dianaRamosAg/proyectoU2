const mongoose = require("mongoose");


ventaSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Client'
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

ventarSchema.pre('save', function(next) {
    var self = this;
    self.subtotal = self.pVenta+self.pVenta;
    self.iva = self.subtotal*1.16;
    self.total = self.iva+self.subtotal;
    next();
});

