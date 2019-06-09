const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('orders').find({_id: id})
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

module.exports.update = async (id, order) => {
  return await dbs.production.collection('orders').updateOne({_id: id}, {$set: order});
};

module.exports.delete = async (id) => {
  return await dbs.production.collection('orders').deleteOne({_id: id});
};

exports.detail = detail;
