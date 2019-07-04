const productsController = require("./products.controller");
const clientsController = require("./clients.controller");
const saleCintroller = require("./sale.controller");

var mongoose = require("mongoose");
var brandSchema = require("./brand.model");
var productSchema = require("./products.model");
var saleSchema = require("./sale.model");

mongoose.connect('mongodb://localhost:27017/bdAEU2', { useNewUrlParser: true }); //Conexión

var Brand = mongoose.model('Brand', brandSchema, 'brands');
var Product = mongoose.model('Product', productSchema, 'products');
var Sale = mongoose.model('Sale', saleSchema, 'sale');

async function createBrandAndProduct() {
    var product = {
        name: "MacBook Air",
        price: 100,
        cost: 50
    };
    
    const brand = "Apple";
    
    var productCreated = await productsController.create(product, brand, Product, Brand);
    console.log("------- Producto Creado --------");
    console.log(productCreated);
}

async function findProduct(price) {
    var productPrice = await productsController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
 
createBrandAndProduct();
findProduct(100);

//------------ Cliente

async function createClient() {
    var client = {
        RFC: "RINR9612211AM9",
        name: 'Carlos Uriel Martinez',
        address: 'Fracc. Jacarandas ',
        cell:'311-219-61-65',
        email:'diana.laura9625@gmail.com'

    };
    
    var clientCreated = await clientsController.create(client);
    console.log(" Cliente guardado ");
    console.log(clientCreated);
}

async function findClient(RFC) {
    var clientRFC = await clientsController.findByRFC(RFC)
    console.log("------- Cliente Encontrado  por RFC--------");

    console.log(clientRFC);
}

createClient();
findClient("RINR9612211AM9");

// venta
var dat = new Date();
async function createSaleAndCP() {
    var Sale = {
        date: dat,
        price: 100,
        cost: 50
    };
    
    const brand = "Apple";
    
    var productCreated = await productsController.create(product, brand, Product, Brand);
    console.log("------- Producto Creado --------");
    console.log(productCreated);
}

async function findProduct(price) {
    var productPrice = await productsController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
 
createBrandAndProduct();
findProduct(100);



