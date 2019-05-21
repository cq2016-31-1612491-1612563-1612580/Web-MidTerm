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

module.exports.add = async (order) => {
  return await dbs.production.collection('orders').insertOne(order);
};

module.exports.update = async (id, product) => {
  return await dbs.production.collection('products').updateOne({_id: ObjectId(id)}, {$set: product});
};

module.exports.delete = async (id) => {
  return await dbs.production.collection('orders').deleteOne({_id: ObjectId(id)});
};

exports.detail = detail;
