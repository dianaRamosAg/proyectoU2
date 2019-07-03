
var mongoose = require("mongoose");
var schema = require("./productos.model");

var mongoose = require("mongoose");
var schema = require("./productos.model");

mongoose.connect('mongodb://localhost:27017/bdU2');  //bd proy2
var producto = mongoose.model('productos', schema, 'productos');

//Insertar
function insertarP(producto) {
    productos.create(producto)
    .then((data) => {
        console.log("Producto guardado");
    })
    .catch((error) => {
        console.log("Error en el producto");
        console.log(error);
    });
}
//Consulta por codigo
function ConsultaProdXnombre(cod) {
    producto.find({codigo:cod},function(error,docs){
        if(error){
            console.log("Error en el producto");
            console.log(error);
        }
        console.log("Consulta por codigo de producto");
        console.log(docs);
    }
    );
}
//Actualizar 
//pendiente
//Eliminar
/*function EliminarP(id) {
    User.findByIdAndRemove({_id:id},
    function(error,docs)
    {
        if(error){
            console.log(error);
        }
        console.log("Producto Eliminado");
        console.log(docs);
    }
    );
    }*/