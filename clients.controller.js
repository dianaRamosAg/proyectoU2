
async function create(Client) {
    var clientCreated = await Client.create(client)
        .then((data) => {
            console.log("Cliente Guardado");
            return data;
        })
        .catch((error) => {
            console.log("Error");
            return error;
        });
    return clientCreated;
}

async function findByRFC(RFCtoFind, Client) {

    var params = {
        RFC: RFCtoFind
    }

    var clientFind = await Client.find(params)
        .then((data) => {
            console.log("busqueda de cliente por rfc");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });

    return clientFind;
}
async function UpdateByCell(CellUP, Client) {
    var params = {
        cell: CellUP
    }
    var updateClientCell = await Client.update({_id:'5d14f31e0158731f08389032'},{$set:{cell:params}})
        .then((data) => {
            console.log("Actualizar telefono del cliente");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return updateClientCell;
}
async function DeleteClient(idC, Client) {
    var params = {
        _id: idC
    }
    var deleteClient = await Client.delete(Client.findByIdAndRemove({_id:params}))
        .then((data) => {
            console.log("Eliminar cliente");
            return data;
        })
        .catch((err) => {
            console.log("Error");
            return err;
        });
    return deleteClient;
}

module.exports.create = create;
module.exports.findByRFC = findByRFC;
module.exports.UpdateByCell = UpdateByCell;
module.exports.DeleteClient = DeleteClient;