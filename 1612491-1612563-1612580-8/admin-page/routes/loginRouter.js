const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
 
const { db } = require('../dbs');
var bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/index', function (req, res) {
    bcrypt.hash(req.body.passwordsignup, saltRounds, function (err,   hash) {
   db.User.create({
     name: req.body.usernamesignup,
     email: req.body.emailsignup,
     password: hash
     }).then(function(data) {
      if (data) {
      res.render('home/index');
      }
    });
   });
  });


router.post('/index', function (req, res) {
    db.User.findOne({
         where: {
             email: req.body.email
                }
    }).then(function (user) {
        if (!user) {
           res.redirect('/');
        } else {
bcrypt.compare(req.body.password, user.password, function (err, result) {
       if (result == true) {
        res.render('home/index');
       } else {
        res.send('Incorrect password');
        res.redirect('/');
       }
     });
    }
 });
});

router.get('/index', loginController.index)


module.exports = router;