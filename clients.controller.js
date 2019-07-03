var mongoose = require("mongoose");
var schema = require("./clientes.model");

mongoose.connect('mongodb://localhost:27017/bdU2');  //bd proy2
var Cliente = mongoose.model('Clientes', schema, 'clientes');

//------------------CRUD---------------------------------------
//Insertar
function insertarC(cliente) {
    Cliente.create(cliente)
    .then((data) => {
        console.log("Cliente guardado");
    })
    .catch((error) => {
        console.log("Error en cliente");
        console.log(error);
    });
}
//no se si funcionen 
//Consulta por nombre
function ConsultaCxN(nombreC) {
    Cliente.find({nombre:nombreC},function(error,docs){
        if(error){
            console.log("Error en cliente");
            console.log(error);
        }
        console.log("Consulta por nombre de cliente");
        console.log(docs);
    }
    );
}
//Consulta por rfc
function ConsultaCRFC(rfc1) {
    Cliente.find({RFC:rfc1},function(error,docs){
        if(error){
            console.log("Error en cliente");
            console.log(error);
        }
        console.log("Consulta por RFC de cliente");
        console.log(docs);
    }
    );
}
//Actualizar telefono
function ActualizarCT(tel) {
Cliente.update({_id:'5d14f31e0158731f08389032'},{$set:{telefono:tel}},
function(error,docs)
{
    if(error){
        console.log(error);
    }
    console.log("Actualización de telefono de cliente");
    console.log(docs);
}
);
}
//Actualizar domicilio
function ActualizarCDom(dom) {
    Cliente.update({_id:'5d14f31e0158731f08389032'},{$set:{domicilio:dom}},
    function(error,docs)
    {
        if(error){
            console.log(error);
        }
        console.log("Actualización de domicilio de cliente");
        console.log(docs);
    }
    );
    }
//Eliminar
function EliminarC(id) {
User.findByIdAndRemove({_id:id},
function(error,docs)
{
    if(error){
        console.log(error);
    }
    console.log("Cliente Eliminado");
    console.log(docs);
}
);
}
//Exportaciones
module.exports.insertarC = insertarC;
module.exports.ConsultaCxN = ConsultaCxN;
module.exports.ConsultaCRFC = ConsultaCRFC;
module.exports.ActualizarCDom = ActualizarCDom;
module.exports.ActualizarCT = ActualizarCT;
module.exports.EliminarC = EliminarC;
