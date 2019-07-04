
async function create(brand, Brand) {
    var brandCreated = await Brand.create(brand)
        .then((data) => {
            console.log("Marca Guardada!!!");
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            return error;
        });
    return brandCreated;
}

async function DeleteBrand(idB, Brand) {
    var params = {
        _id: idB
    }
    var deleteBrand2 = await Brand.findByIdAndRemove({_id:'5d1d4d323c5b76276c684f17'})
        .then((data) => {
            console.log("Eliminar Marca");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return deleteBrand2;
}

module.exports.create = create;
module.exports. DeleteBrand =  DeleteBrand;