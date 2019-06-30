var createError = require('http-errors');
var express = require('express');
var reload = require('reload');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var path2 = __dirname + '/routes/users.js'
console.log('pp - ', path, path2);

//app.use(reload(path2))
reload(app).then((reloadReturned)=> {
  console.log(__dirname+ "/routes");
  //setInterval(()=> {
    //console.log('is ok?');
    //reloadReturned.reload();
  //}, 1000);
  //watch.watchTree(__dirname + "/routes", function (f, curr, prev) {
    //console.log('wtf!!!');
    //reloadReturned.reload();
  //});
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
