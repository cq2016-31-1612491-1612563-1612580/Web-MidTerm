const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('accounts').find({_id: id})
    .toArray();
  return results[0];
};

module.exports.add = async (order) => {
  return await dbs.production.collection('accounts').insertOne(order);
};
