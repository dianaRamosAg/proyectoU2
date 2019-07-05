    
const productsController = require("./products.controller");
const clientsController = require("./clients.controller");
const saleController = require("./sale.controller");

var mongoose = require("mongoose");
var brandSchema = require("./brand.model");
var productSchema = require("./products.model");
var saleSchema = require("./sale.model");
var clientSchema = require("./clients.model");


mongoose.connect('mongodb://localhost:27017/bdAEU2', { useNewUrlParser: true }); //Conexión

var Brand = mongoose.model('Brand', brandSchema, 'brands');
var Product = mongoose.model('Product', productSchema, 'products');
var Sale = mongoose.model('Sale', saleSchema, 'sale');
var Client= mongoose.model('Client', clientSchema, 'clients');

//Producto
var c;
async function createBrandAndProduct() {
    var product = {
        name: "MacBook Air",
        price: 100,
        cost: 50,
        quantity:30,
        min: 10,
        max: 50

    };
    
    const brand = "Apple";
    
    var productCreated = await productsController.create(product, brand, Product, Brand);
    console.log("------- Producto Creado --------");
    console.log(productCreated);
    var c = product.cost;
}

async function findProduct(price) {
    var productPrice = await productsController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);

   
}
 
//createBrandAndProduct();
//findProduct(100);


async function DeleteBrand(id) {
    var BrandID = await brandController.DeleteBrand(id,Brand)
    console.log("------- Marca eliminada--------");
    console.log(BrandID);
}
//deletedProduct();

//DeleteBrand();


//------------ Cliente

async function createClient() {
    var client = {
        RFC: "GAFJ810702NA0",
        name: 'Carlos Uriel Martinez',
        address: 'Fracc. Jacarandas ',
        cell:'3112196165',
        email:'diana.laura9625@gmail.com'
    };
    
    var clientCreated = await clientsController.create(client,Client);
    console.log(" Cliente guardado ");
    console.log(clientCreated);
}

async function findClient(RFC) {
    var clientRFC = await clientsController.findByRFC(RFC,Client)
    console.log("------- Cliente Encontrado  por RFC--------");
    console.log(clientRFC);
}

async function UpdateByCell(cell) {
    var clientCell = await clientsController.UpdateByCell(cell,Client)
    console.log("------- celular Actualizado--------");
    console.log(clientCell);
}
async function DeleteClient(id) {
    var clientID = await clientsController.DeleteClient(id,Client)
    console.log("------- Cliente eliminado--------");
    console.log(clientID);
}


//createClient();
//findClient("GAFJ810702NA0");
//UpdateByCell();
//DeleteClient();

// venta
    var dat = new Date();
    var subt = c;
    var iv= subt*1.16;
    var ttl= iv+subt;

async function createSaleAndP() {
    var sale = {
        client: "Sandra Lomeli Aguirre",
        date: dat,
        subtotal: subt,
        iva: iv,
        total: ttl        
    };
    
    const product = 50;
    
    var saleCreated = await saleController.create(sale, product, Sale, Product);
    console.log("------- Venta Creado --------");
    console.log(saleCreated);
}

async function findProduct(price) {
    var salePrice = await saleController.findByPrice(price, Sale)
    console.log("------- Productos Encontrado --------");

    console.log(salePrice);
}
 
 
createSaleAndP();
//findProduct(100);