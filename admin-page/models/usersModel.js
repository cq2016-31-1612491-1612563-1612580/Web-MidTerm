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



