const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');


const detail = async (id) => {
    const results = await dbs.production.collection('products').find({id:'Tài Khoản'})
        .toArray();
    return results[0];
};


module.exports.list = async () => {
    return await dbs.production.collection('products').find({id:'Tài Khoản'})
        .toArray();
};

module.exports.add = async (product) => {
    return await dbs.production.collection('products').insertOne(product);
};

module.exports.update = async (id, product) => {
    return await dbs.production.collection('products').updateOne({_id: ObjectId(id)}, {$set: product});
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('products').deleteOne({_id: ObjectId(id)});
};

exports.detail = detail;
