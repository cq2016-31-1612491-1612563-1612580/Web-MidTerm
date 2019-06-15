const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');


module.exports.list = async () => {
  return await dbs.production.collection('users').find({})
    .toArray();
};

module.exports.detail = async (id) => {
  const results = await dbs.production.collection('users').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
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

module.exports.update = async (id, user) => {
  return await dbs.production.collection('users').updateOne({_id: ObjectId(id)}, {$set: user});
};
