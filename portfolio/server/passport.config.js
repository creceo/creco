var authData = require("./authData.json");

var self = {
  passport: require("passport"),
  LocalStrategy: require("passport-local").Strategy,
  app: undefined,
  setApp: app => {
    self.app = app;
  },
  use: () => {
    self.app.use(self.passport.initialize());
    self.app.use(self.passport.session());

    self.passport.use(
      new self.LocalStrategy(
        { usernameField: "username", passwordField: "password" },
        function(username, password, done) {
          if (username === authData.email) {
            if (password === authData.password) {
              return done(null, authData);
            } else {
              return done(null, false, {
                message: "Incorrect password."
              });
            }
          } else {
            return done(null, false, {
              message: "Incorrect username."
            });
          }
        }
      )
    );

    self.passport.serializeUser(function(user, done) {
      done(null, {
        email: user.email,
        nickname: user.nickname
      });
    });

    self.passport.deserializeUser(function(email, done) {
      done(null, authData);
    });

    self.app.post(
      "/api/login",
      self.passport.authenticate("local", {
        successRedirect: "/web/home",
        failureRedirect: "/web/login"
      })
    );
  }
};

module.exports = function(app) {
  self.app = app;
  return self;
};
