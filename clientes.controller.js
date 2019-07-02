var mongoose = require("mongoose");
var schema = require("./clientes.model");


//mongoose.connect('mongodb://localhost:27017/bdU2');
var Cliente = mongoose.model('Clientes', schema, 'clientes');

//------------------CRUD---------------------------------------
//Insertar
function insertarC(cliente) {
    Cliente.create(cliente)
    console.log("Cliente guardado");
    process.exit(0);
}
//Consulta

//Actualizar

//Eliminar


module.exports.insertarC= insertarC;