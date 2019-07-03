const clienteController = require("./clientes.controller");
const productosController = require("./productos.controller");
const ventaController = require("./venta.controller");
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
clienteController.ConsultaCxN("Diana");
clienteController.ConsultaCRFC('GAFJ810702NA0');
clienteController.ActualizarCT('5552196165');
clienteController.EliminarC('GAFJ810702NA0');
clienteController.ActualizarCDom('Av Orquidea #55');


//Productos


//Marcas
var marca = {
    nombre:"lala"
};
marcaController.insertarM(marca);

//Ventas
var venta={
    cliente: "Diana Laura Ramos aguilar",
    fecha: "02/07/2019",
    subtotal: 145,
}

clienteController.insertarv(cliente);
clienteController.ConsultaF("02/07/2019");
//clienteController.EliminarC('GAFJ810702NA0');
