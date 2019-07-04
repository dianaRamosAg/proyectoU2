const productsController = require("./products.controller");
const clientsController = require("./clients.controller");
const saleCintroller = require("./sale.controller");

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
}

async function findProduct(price) {
    var productPrice = await productsController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
//deleted product
async function deletedProduct(id) {
    var productID = await productsController.deletedProduct(id,Product)
    console.log("------- producto eliminado--------");
    console.log(productID);
}
//update product
async function updateByPrice(price) {
    var price = await productsController.UpdateByPrice(price,Product)
    console.log("------- precio de producto actualizado--------");
    console.log(price);
}
async function updateByCost(cost) {
    var cost = await productsController.UpdateByCost(cost,Product)
    console.log("------- costo de producto actualizado--------");
    console.log(cost);
}
async function updateByQuantity(quantity) {
    var quantity = await productsController.UpdateByQuantity(quantity,Product)
    console.log("------- cantidad de producto actualizado--------");
    console.log(quantity);
}
async function updateByMin(min) {
    var min = await productsController.UpdateByMin(min,Product)
    console.log("------- cantidad minima de producto actualizado--------");
    console.log(min);
}
async function updateByMax(max) {
    var max = await productsController.UpdateByMax(max,Product)
    console.log("------- cantidad minima de producto actualizado--------");
    console.log(max);
}
//updateByMax();
//updateByMin();
//updateByQuantity();
//updateByCost();
//updateByPrice();
//deletedProduct();
//createBrandAndProduct();
//findProduct(100);

async function DeleteBrand(id) {
    var BrandID = await brandController.DeleteBrand(id,Brand)
    console.log("------- Marca eliminada--------");
    console.log(BrandID);
}

//


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
async function createSaleAndP() {
    var Sale = {
        client: "Jose Luis Alfaro Martinez",
        date: dat,
        subtotal: sub,
        iva: iv,
        total: ttl

    };
    
    const client = 50;
    
    var saleCreated = await saleController.create(sale, client, Sale, Client);
    console.log("------- Venta Creada --------");
    console.log(saleCreated);

}

async function findProduct(price) {
    var productPrice = await productsController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
 
//createSaleAndP();
//findProduct(100);



