const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const {dbs} = require('../dbs');

const USERS = 'users';
const SALT_ROUNDS = 10;
/**
 *
 * @param email
 * @param password
 * @return user
 */
exports.verify = async (email, password) => {
  const user = await dbs.production.collection(USERS).findOne({email: email})
  if (user)
    return undefined;
  // verify password
  // ...
  return results[0];
};

const get = async (email) => {
  return await dbs.production.collection(USERS).findOne({email});
};

const check = async (email) => {
  const user = await dbs.production.collection(USERS).findOne({email});
  console.log(email)
  if (user)
    return true;
  return false;
};

exports.check = check;

exports.get = get;

exports.register = async (email, password) => {
  const hash =  await bcrypt.hash(password, SALT_ROUNDS);
  return dbs.production.collection(USERS).insert({email, password: hash});
};

exports.validPassword = async (email, password) => {
  console.log('enter login')
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await get(email);
  if (!user)
    return false;
  return await bcrypt.compare(password, user.password);
};