const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('orders').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('orders').find({})
    .toArray();
};

module.exports.add = async (product) => {
  return await dbs.production.collection('orders').insertOne(product);
};


exports.detail = detail;
