var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/usersRouter');
var productsRouter = require('./routes/productsRouter');
var orderRouter = require('./routes/orderRouter');
var categoryRouter = require('./routes/categoryRouter');
var chartsRouter = require('./routes/chartsRouter');
var widgetsRouter = require('./routes/widgetsRouter');
var inboxRouter = require('./routes/inboxRouter');
var composeRouter = require('./routes/composeRouter');
var loginRouter = require('./routes/loginRouter');

const loginModel = require('./models/loginModel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: "meo cats",
                cookie: {
                  maxAge: 1000 * 50 * 5 //đơn vị là milisecond
                }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/order', orderRouter);
app.use('/category', categoryRouter);
app.use('/charts', chartsRouter);
app.use('/widgets', widgetsRouter);
app.use('/inbox', inboxRouter);
app.use('/compose', composeRouter);
app.use('/log', loginRouter);

app.get('/secret', (req, res) => {
  if (req.isAuthenticated()) { //trả về true nếu đã đăng nhập rồi
      res.send('Đã đăng nhập');
  } else {
      res.redirect('/log');
  }
})

passport.use(new LocalStrategy({usernameField: 'email'},
  async function (username, password, done) {
    try {
      const user = await loginModel.get(username);
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      const isPasswordValid = await loginModel.validPassword(username, password);
      if (!isPasswordValid) {
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    } catch (ex) {
      return done(ex);
    }
}));

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(async function (email, done) {
  const user = await loginModel.get(email);
  done(undefined, user);
});

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
