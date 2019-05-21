const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('category').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('category').find({})
    .toArray();
};

module.exports.add = async (category) => {
  return await dbs.production.collection('category').insertOne(category);
};

module.exports.update = async (id, category) => {
  return await dbs.production.collection('category').updateOne({_id: ObjectId(id)}, {$set: category});
};

module.exports.delete = async (id) => {
  return await dbs.production.collection('category').deleteOne({_id: ObjectId(id)});
};

exports.detail = detail;