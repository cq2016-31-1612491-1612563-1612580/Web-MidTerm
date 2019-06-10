const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const get = async (email) => {
    return await dbs.production.collection('users').findOne({email});
};

exports.get = get;

exports.register = async (email, password) => {
    const hash =  await bcrypt.hash(password, SALT_ROUNDS);
    return dbs.production.collection('users').insertOne({email, password: hash});
};

exports.validPassword = async (email, password) => {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await get(email);
    if (!user)
      return false;
    return await bcrypt.compare(password, user.password);
  };


