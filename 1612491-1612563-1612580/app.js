var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var productsRouter = require('./routes/products');
const apiUserRouter = require('./routes/api/user');
const User = require('./models/user');

passport.use(new LocalStrategy({usernameField: 'email'},
  async function (username, password, done) {
    try {
      const user = await User.get(username);
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      const isPasswordValid = await User.validPassword(username, password);
      if (!isPasswordValid) {
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    } catch (ex) {
      return done(ex);
    }
  }));

  //to do forgot password by email
  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
},
 async function (req, email, password, done) {
  // asynchronous
  // User.findOne wont fire unless data is sent back
  process.nextTick(function () {
      // find a user whose email is the same as the forms email
      // we are checking to see if the user trying to login already exists
      User.findOne({'local.email': email}, function (err, user) {
          // if there are any errors, return the error
          if (err) {
              return done(err);
          }

          // check to see if theres already a user with that email
          if (user) {
              console.log('that email exists');
              return done(null, false, req.flash('signupMessage', email + ' is already in use. '));

          } else {
              User.findOne({'local.username': req.body.username}, function (err, user) {
                  if (user) {
                      console.log('That username exists');
                      return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
                  }

                  if (req.body.password != req.body.confirm_password) {
                      console.log('Passwords do not match');
                      return done(null, false, req.flash('signupMessage', 'Your passwords do not match'));
                  }

                  else {
                      // create the user
                      var newUser = new User();

                      var permalink = req.body.username.toLowerCase().replace(' ', '').replace(/[^\w\s]/gi, '').trim();

                      var verification_token = randomstring.generate({
                          length: 64
                      });


                      newUser.local.email = email;

                      newUser.local.password = newUser.generateHash(password);

                      newUser.local.permalink = permalink;

                      //Verified will get turned to true when they verify email address
                      newUser.local.verified = false;
                      newUser.local.verify_token = verification_token;

                      try {
                          newUser.save(function (err) {
                              if (err) {

                                  throw err;
                              } else {
                                  VerifyEmail.sendverification(email, verification_token, permalink);
                                  return done(null, newUser);
                              }
                          });
                      } catch (err) {

                      }
                  }
              });
          }
      });
  });
}));


passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(async function (email, done) {
  const user = await User.get(email);
  done(undefined, user);
});


var app = express();

// serve static files from /public
//app.use(express.static(__dirname + '/template'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var blocks = {};

hbs.registerHelper('extend', function(name, context) {
  var block = blocks[name];
  if (!block) {
    block = blocks[name] = [];
  }

  block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
});

hbs.registerHelper('block', function(name) {
  var val = (blocks[name] || []).join('\n');

  // clear the block
  blocks[name] = [];
  return val;
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "meo cats"}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/products', productsRouter);
app.use('/api/user', apiUserRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
