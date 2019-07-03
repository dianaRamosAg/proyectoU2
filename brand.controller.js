var mongoose = require("mongoose");
var schema = require("./marca.model");

var Marca = mongoose.model('Marca', schema, 'marca');
//------------------CRUD---------------------------------------
//Insertar
function insertarM(marca) {
    Marca.create(marca)
    .then((data) => {
        console.log("Marca guardada");
    })
    .catch((error) => {
        console.log("Error en marca");
        console.log(error);
    });
}
//Consulta

//Actualizar

//Eliminar


module.exports.insertarM= insertarM;