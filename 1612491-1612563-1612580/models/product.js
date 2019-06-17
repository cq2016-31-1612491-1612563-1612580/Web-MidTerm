const ObjectId = require('mongodb').ObjectId;
const { dbs } = require('../dbs');

const detail = async (id) => {
    const results = await dbs.production.collection('products').find({_id: ObjectId(id)})
        .toArray();
    return results[0];
};

const detailProduct = async (id) => {
    console.log('vo ham product detail')
    console.log('id='+id);
    const results =  await dbs.production.collection('products').findOne({id: id});
    console.log(results);
    return results;
};

exports.detail = detail;
exports.detailProduct = detailProduct;

exports.insertToDB = async(nnn) =>{
    try{
        var check =await dbs.production.collection('products').findOne(nnn.id);
        if(check){
            console.log('co roi');
            console.log(check);
            console.log('id = '+nnn.id);

            return;
        }
        else{
            await dbs.production.collection('products').insertMany(nnn);
            console.log('thoát hàm insertmany thành công')
      }
    
    }catch(error){
        console.log(error);
    }
    
}
