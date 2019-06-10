const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');


const detail = async (id) => {
    const results = await dbs.production.collection('products').find({id:'Tài Khoản'})
        .toArray();
    return results[0];
};


module.exports.list = async () => {
    return await dbs.production.collection('users').find({})
        .toArray();
};

module.exports.add = async (product) => {
    return await dbs.production.collection('users').insertOne(product);
};

module.exports.update = async (id, product) => {
    return await dbs.production.collection('users').updateOne({_id: ObjectId(id)}, {$set: product});
};

module.exports.delete = async (id) => {
    return await dbs.production.collection('users').deleteOne({_id: ObjectId(id)});
};

exports.detail = detail;
