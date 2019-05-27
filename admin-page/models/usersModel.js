const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
  const results = await dbs.production.collection('accounts').find({_id: ObjectId(id)})
    .toArray();
  return results[0];
};

module.exports.list = async () => {
  return await dbs.production.collection('accounts').find({})
    .toArray();
};

module.exports.detail = async (id, account) => {
  return await dbs.production.collection('accounts').updateOne({_id: ObjectId(id)}, {$set: account});
};
