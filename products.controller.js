
var brandController = require("./brand.controller");



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

async function findByName(NameToFind, Product) {

    var params = {
        name: NameToFind
    }

    var productFind = await Product.find(params)
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
async function deletedProduct(idP, Product) {
    var params = {
        _id: idP

    }
    var deletedProduct = await Product.findByIdAndRemove(params)
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
//update
async function UpdateByPrice(price, Product) {
    var params = {
        price: price,
    }
    var UpdateByPrice= await Product.update({_id:'5d1e8896114ec430a8d9b563'},{$set:{price:"60"}})
        .then((data) => {
            console.log("Actualizar el precio del producto");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return UpdateByPrice;
}
async function UpdateByCost(cost, Product) {
    var params = {
        cost: cost,
    }
    var UpdateByCost= await Product.update({_id:'5d1e8896114ec430a8d9b563'},{$set:{cost:"40"}})
        .then((data) => {
            console.log("Actualizar el costo del producto");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return UpdateByCost;
}
async function UpdateByQuantity(quantity, Product) {
    var params = {
        quantity: quantity,
    }
    var UpdateByQuantity= await Product.update({_id:'5d1e8896114ec430a8d9b563'},{$set:{quantity:"40"}})
        .then((data) => {
            console.log("Actualizar la cantidad del producto");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return UpdateByQuantity;
}

async function UpdateByMin(min, Product) {
    var params = {
        min: min,
    }
    var UpdateByMin= await Product.update({_id:'5d1e8896114ec430a8d9b563'},{$set:{min:"30"}})
        .then((data) => {
            console.log("Actualizar la cantidad minima del producto");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return UpdateByMin;
}

async function UpdateByMax(max, Product) {
    var params = {
        max: max,
    }
    var UpdateByMax= await Product.update({_id:'5d1e8896114ec430a8d9b563'},{$set:{max:"80"}})
        .then((data) => {
            console.log("Actualizar la cantidad maxima del producto");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return UpdateByMax;
}
module.exports.create = create;
module.exports.findByPrice = findByPrice;
module.exports.deletedProduct=deletedProduct;
module.exports.UpdateByPrice=UpdateByPrice;
module.exports.UpdateByCost=UpdateByCost;
module.exports.UpdateByQuantity=UpdateByQuantity;
module.exports.UpdateByMin=UpdateByMin;
module.exports.UpdateByMax=UpdateByMax;
module.exports.findByName=findByName;