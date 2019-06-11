var crypto = require('crypto');
var nodemailer = require('nodemailer');
const config = require('../config/mailer')

const transport = nodemailer.createTransport({
    service:'Mailgun',
    auth:{
        user:config.MAILGUN_USER,
        pass:config.MAILGUN_PASS
    },
    
})

exports.sendEmail = function (from, to, subject, html){
    return new Promise ((resolve, reject)=>{ console.log('Bat dau gui mail');
        transport.sendMail({from, to, subject,html},(error,info)=>{
            if(error) reject(error);
            resolve(info);
        })
    })
}
        