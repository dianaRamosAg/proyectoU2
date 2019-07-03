const mongoose = require("mongoose");


userSchema = new mongoose.Schema({
    cliente: [{name: String, numero: String}],
    
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

userSchema.pre('save', function(next) {
    var self = this;
    self.birthdate = self.curp.substr(4,2)+"/"+self.curp.substr(6,2)+"/"+self.curp.substr(8,2);
    next();
});



module.exports = userSchema;