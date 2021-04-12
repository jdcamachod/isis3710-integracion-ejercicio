const { client } = require("../db/Mongolib");
const ObjectID = require("mongodb").ObjectID;

function Offer() {
    const connection = client
    .connect()
        .then((connection) => connection.db("job").collection("offers"));
    
    const offer = {};


    offer.findAll = () => {
    return connection.then((c) => c.find({}).toArray());
    };

    offer.insertOne = (data) => {
        return connection.then((c) => c.insertOne(data));
    }

    
    return offer;
}

module.exports = Offer();