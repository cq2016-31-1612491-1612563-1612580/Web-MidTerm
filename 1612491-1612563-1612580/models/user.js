const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const {dbs} = require('../dbs');
const mongoose = require('mongoose');
const Randomstring = require('randomstring')
const mailer = require('../misc/mailer')
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
  try{
    console.log(email)
    return await dbs.production.collection(USERS).findOne({email});
  }catch(error){
    console.log(error)
  }
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

exports.recover = async (email)=>{
  
  const html = `Hello Mr.HuyKhanh,
  <br/><br/>
  B2:Click here => <b>http://localhost:3000/recoveryPass</b>
  <br/> Thank you!`

  console.log('truoc khi send email')
  //send email
  await mailer.sendEmail('admin@codeworkrsite.com',email,'Verifying email',html);

  console.log('Check your email');

}

exports.register = async (email, password) => {
  const hash =  await bcrypt.hash(password, SALT_ROUNDS);

  //before insert to db, set token
  const secretToken = Randomstring.generate();
  
  var active = false;

  const html = `Hello Mr.HuyKhanh,
  <br/><br/>
  Please verify code by Token: <b>${secretToken}</b>,
  <br/><br/>
  B1: Copy Token
  <br/><br/>
  B2:Click here => <b>http://localhost:3000/verify</b> and past
  <br/> Thank you!`
  
  console.log('truoc khi send email')
  //send email
  await mailer.sendEmail('admin@codeworkrsite.com',email,'Verifying email',html);

  console.log('Check your email');

  return dbs.production.collection(USERS).insert({email, password: hash, secretToken, active});
};

exports.validPassword = async (email, password) => {
  console.log('enter login')
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  const user = await get(email);
  if (!user)
    return false;
  return await bcrypt.compare(password, user.password);
};

const update = async (email, user) => {
  return await dbs.production.collection('users').updateOne({email: email}, {$set: user});
};
exports.update = update;

exports.changePassword = async (email, password, newpassword) => {
  const user = await get(email);
  console.log('user: ' + user);
  if(bcrypt.compare(password, user.password))
  {
    const hash = await bcrypt.hash(newpassword, SALT_ROUNDS);
    await update(email, {password: hash});
  }
  else
  {
    return false;
  }
}
