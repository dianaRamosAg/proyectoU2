const clienteController = require("./clientes.controller");
const productosController = require("./productos.controller");
const ventaController = require("./venta.controller");
const marcaController = require("./marca.controller");

/*PARA PROBAR SUS COSAS LES RECOMIENDO COMENTAR LO DEMÁS PARA
QUE PRUEBEN DIRECTAMENTE LO SUYO
*/
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
clienteController.ConsultaCxN("Diana");
clienteController.ConsultaCRFC('GAFJ810702NA0');
clienteController.ActualizarCT('5552196165');
clienteController.EliminarC('GAFJ810702NA0');
clienteController.ActualizarCDom('Av Orquidea #55');


//Productos


//Marcas
var marca = {
    nombre:"lala",
    creador:"maria"
};
marcaController.insertarM(marca);

//Ventas
