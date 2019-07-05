
var productsController = require("./products.controller");
//var clientsController = require("./clients.controller");


/*
async function create(sale,product,Sale, Product) {

    var product = {
        product: product
    };

    var productCreated = await productsController.create(product, Product);

    sale["product"] = productCreated._id;

    var saleCreated = await Sale.create(sale)
        .then((data) => {
            console.log("venta Guardado!!!");
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return saleCreated;
}
*/
async function create(sale,Sale) {
    var saleCreated = await Sale.create(sale)
        .then((data) => {
            console.log("Sale Guardado");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return saleCreated;
}
//Buscar 
async function findByPrice(priceToFind, Sale) {

    var params = {
        price: priceToFind
    }

    var saleFind = await Sale.find(params)
        .populate("products")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return saleFind;
}


module.exports.create = create;
module.exports.findByPrice = findByPrice;
