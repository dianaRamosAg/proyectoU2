var mongoose = require("mongoose");
var schema = require("./clientes.model");

//mongoose.connect('mongodb://localhost:27017/bdU2');  //bd proy2
var venta = mongoose.model('Ventas', schema, 'ventas');

//Insertar venta
function insertarv(venta) {
    Ventas.create(venta)
    .then((data) => {
        console.log("Venta guardada");
    })
    .catch((error) => {
        console.log("Error en guardar venta");
        console.log(error);
    });
}
//Consulta por fecha
function ConsultaF(fechaV) {
    Venta.find({fecha:fechaV},function(error,docs){
        if(error){
            console.log("Error en cliente");
            console.log(error);
        }
        console.log("Consulta por nombre de cliente");
        console.log(docs);
    }
    );
}

//Exportaciones
module.exports.insertarv = insertarv;
module.exports.ConsultaF = ConsultaF;
module.exports.EliminarC = EliminarC;
