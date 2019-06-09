var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');

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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
