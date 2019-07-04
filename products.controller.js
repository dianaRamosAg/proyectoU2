// var mongoose = require("mongoose");
// var productSchema = require("./product.model");
var brandController = require("./brand.controller");

// mongoose.connect('mongodb://localhost:27017/ae2010veje06', { useNewUrlParser: true });


async function create(product, brand, Product, Brand) {

    var brand = {
        brand: brand
    };

    var brandCreated = await brandController.create(brand, Brand);

    product["brand"] = brandCreated._id;

    var productCreated = await Product.create(product)
        .then((data) => {
            console.log("Producto Guardado!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return productCreated;
}

async function findByPrice(priceToFind, Product) {

    var params = {
        price: priceToFind
    }

    var productFind = await Product.find(params)
        .populate("brand")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return productFind;
}
//deletedProduct
async function deletedProduct(idP, product) {
    var params = {
        _id: idP
    }
    var deletedProduct = await product.findByIdAndRemove({_id:'5d1d4b7fa12f66291cdf9f0c'})
        .then((data) => {
            console.log("Eliminar producto");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return deletedProduct;
}

module.exports.create = create;
module.exports.findByPrice = findByPrice;
module.exports.deletedProduct=deletedProduct;