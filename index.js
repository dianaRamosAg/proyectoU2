    
const productsController = require("./products.controller");
const clientsController = require("./clients.controller");
const saleController = require("./sale.controller");

const brandController = require("./brand.controller");


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
        name: "Refresco",
        price: 13,
        cost: 50,
        quantity:30,
        min: 8,
        max: 22

    };
    
    const brand = "Coca cola";
    
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

async function findByName(Name) {
    var productName = await productsController.findByName(Name, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productName);
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
//------------------ Metodos de producto --------------------------
//updateByMax();
//updateByMin();
//updateByQuantity();
//updateByCost();
//updateByPrice();
//deletedProduct("");
//createBrandAndProduct();
//findProduct(100);
//findByName("MacBook Air");


async function DeleteBrand(id) {
    var BrandID = await brandController.DeleteBrand(id,Brand)
    console.log("------- Marca eliminada--------");
    console.log(BrandID);
}
//deletedProduct();


// --- Metodos de Marca

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
//------------- Metodos de cliente -------------

//createClient();
//findClient("GAFJ810702NA0");
//UpdateByCell();
//DeleteClient("5d1e9f0031a04b350c247e5b");

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

    const client = "Jose Luis Alfaro Martinez";

    
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
//createSaleAndP();
//findProduct(100);

