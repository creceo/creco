var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* router of models */
var memoRouter = require('./routes/memoRoutes');

var app = express();

mongoose.connect('mongodb://127.0.0.1/creco');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(process.env.DEV);
if(process.env.DEV == "true"){
	app.use(express.static(path.join(__dirname, 'public')));
	console.log("It is dev version");
	console.log(process.env.PUBLIC_URL);
}else if(process.env.DEV == "false"){
	app.use(express.static(path.join(__dirname, 'build')));
	console.log("It is production version");
	console.log(process.env.PUBLIC_URL);
}else{
	process.exit(1);
}
app.use('/', indexRouter);
app.use('/users', usersRouter);

/* use of router */
app.use('/memo', memoRouter);

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
