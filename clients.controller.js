
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

module.exports.create = create;
module.exports.findByRFC = findByRFC;