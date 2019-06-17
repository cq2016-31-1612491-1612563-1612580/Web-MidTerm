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
const adminpageRouter = require('./routes/admin');
const User = require('./models/user');
const home_controll= require('./controllers/homeController');

passport.use(new LocalStrategy({usernameField: 'email'},
  async function (username, password, done) {
    try {
      const user = await User.get(username);
      if (!user) {
        console.log("Incorrect username.")
        return done(null, false, {message: 'Incorrect username.'});
      }
      const isPasswordValid = await User.validPassword(username, password);
      if (!isPasswordValid) {
        console.log("Incorrect password.")
        return done(null, false, {message: 'Incorrect password.'});
      }
      const isLocked = await User.isLocked(username);
      if(isLocked)
      {
        console.log('Tài khoản đã bị khóa');
        return done(null, false, {message: 'Tài khoản đã bị khóa'});
      }

      //check if the acount has been vertify
      // if(!user.active){
      //   console.log("you need to verify firsts.")
      //   return done(null, false, {message: 'you need to verify firsts.'});
      // }

      //display username
      //await home_controll.checkDisplay();

      return done(null, user);
    } catch (ex) {
      return done(ex);
    }
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
app.use('/verify', indexRouter);
app.use('/recoveryPass', indexRouter);

hbs.registerHelper('ifCond', function (v1, operator, v2, options) {

  switch (operator) {
      case '==':
          return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '===':
          return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '!=':
          return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '!==':
          return (v1 !== v2) ? options.fn(this) : options.inverse(this);
      case '<':
          return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
          return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
          return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
          return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
          return options.inverse(this);
  }
});

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
