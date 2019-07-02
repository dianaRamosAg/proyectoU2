var mongoose = require("mongoose");
var schema = require("./marca.model");

mongoose.connect('mongodb://localhost:27017/bdU2');
var Marca = mongoose.model('Marca', schema, 'marca');
//------------------CRUD---------------------------------------
//Insertar
function insertarM(marca) {
    Marca.save(marca)
        console.log("Marca guardada");
        console.log(data);
}
//Consulta

//Actualizar

//Eliminar


module.exports.insertarM= insertarM;