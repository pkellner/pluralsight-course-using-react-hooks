const express = require("express");
const next = require("next");

var passport = require("passport");
var Strategy = require("passport-local").Strategy;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

passport.use(
  new Strategy(function(username, password, done) {
    function validateUser(username, password) {
      return username === password;
    }

    return validateUser(username, password)
      ? done(null, { email: username })
      : done(false, false); // done(.. sends to serialize)
  })
);

passport.serializeUser(function(userInfo, done) {
  done(null, userInfo);
});

passport.deserializeUser(function(userInfo, cb) {
  cb(null, userInfo);
});

app
  .prepare()
  .then(() => {
    var app = express();

    app.use(require("cookie-parser")());
    app.use(require("body-parser").urlencoded({ extended: true }));
    app.use(
      require("express-session")({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false
      })
    );

    // Initialize Passport and restore authentication state, if any, from the
    // session.
    app.use(passport.initialize());
    app.use(passport.session());



    var sessionChecker = (req, res, next) => {
      console.log(`req.isAuthenticated:${req.isAuthenticated()}`);
      next();
    };

    app.get("/authcheck", sessionChecker, (req, res) => {
      if (req.isAuthenticated()) {
        res.send(`<h1>Authenticated ${req.session.passport.user.email}</h1>`);
      } else {
        res.send(`<h2>Not Authenticated</h2>`);
      }
    });





    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
