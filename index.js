const clienteController = require("./clientes.controller");
const productosController = require("./productos.controller");
const usuarioController = require("./venta.controller");
const marcaController = require("./marca.controller");

//Cliente
var cliente = {
    RFC:"GAFJ810702NA0",
    nombre:"Diana Laura Ramos Aguilar",
    domicilio:"calle 7 #19",
    telefono:"3111255293",
    email:"diana.laura9625@gmail.com"
};
//llamar crud del cliente
clienteController.insertarC(cliente);

//Productos


//Marcas
var marca = {
    nombre:"lala",
    creador:"maria"
};
marcaController.insertarM(marca);

//Ventas
