const mongoose = require("mongoose");


ventaSchema = new mongoose.Schema({
    cliente: {

    },
    fecha:{
        type: Date,
        required: true
    },
    prductos:[{codigo:String, pVenta: Number}],

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

module.exports = mongoose.model("venta", ventaSchema);