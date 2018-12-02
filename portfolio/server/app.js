var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var session = require("express-session");
var FileStore = require("session-file-store")(session);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
var passport = require("./passport.config")(app);

require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

if (process.env.mode !== "development") {
  app.use("/web", express.static(path.join(__dirname, "build")));
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: "크리에이티코딩웹사이트",
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
  })
);

passport.use();

app.use(function(req, res, next) {
  var passport = req.session.passport;
  console.log("session.passport", passport);
  var cookie = req.cookies;
  var user = undefined;
  if (passport != undefined)
    user = {
      email: passport.user.email,
      nickname: passport.user.nickname
    };
  if (
    passport != undefined &&
    user != undefined &&
    cookie["user"] === undefined
  )
    res.cookie("user", JSON.stringify(user), {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false
    });

  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
