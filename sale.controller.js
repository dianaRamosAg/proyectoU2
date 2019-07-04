var productsController = require("./products.controller");
var clientsController = require("./clients.controller");


async function create(sale, clients, Sale, Clients) {

    var clients = {
        clients: clients
    };

    var clientsCreated = await clientsController.create(clients, Clients);

    sale["clients"] = clientsCreated.name;

    var saleCreated = await Sale.create(sale)
        .then((data) => {
            console.log("Venta Guardada!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error en guardar la venta!!!");
            // console.log(error);
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
