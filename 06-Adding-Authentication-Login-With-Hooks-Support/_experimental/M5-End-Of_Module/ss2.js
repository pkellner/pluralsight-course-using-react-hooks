const express = require("express");
const next = require("next");

var passport = require("passport");
var Strategy = require("passport-local").Strategy;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

passport.use(
  new Strategy(function(username, password, done) {
    console.log(`passport.use`);
    return username === password ? done(null, {id: 903}) : done(false, false); // done(.. sends to serialize)
  })
);

passport.serializeUser(function(userInfo, done) {
  console.log(`serializeUser`);
  done(null, userInfo);
});

passport.deserializeUser(function(userInfo, cb) {
  console.log(`deserializeUser`);
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


    // app.get("/login", (req, res) => {
    //   //console.log('in server.js login GET called...');
    //   return app.render(req, res, "/login");
    // });


    app.post(
      "/login",
      passport.authenticate("local", { failureRedirect: "/login" }),
      function(req, res) {
        res.redirect("/");
      }
    );

    // app.post(
    //   "/login",
    //   passport.authenticate("local", {
    //     failureRedirect: "/login",
    //     successRedirect: "/",
    //     successFlash: "Welcome!",
    //     failureFlash: true
    //   }),
    //   () => {
    //     console.log(`server.post:/login`);
    //
    //     // console.log(
    //     //   `success: server.post login   req.user.username:${
    //     //     req.user.username
    //     //     }  req.authInfo.message:${req.authInfo.message}`
    //     // );
    //   }
    // );

    // middleware function to check for logged-in users
    var sessionChecker = (req, res, next) => {
      console.log(`req.isAuthenticated:${req.isAuthenticated()}:${req.session.passport.user.id}`);

      // if (req.session.user && req.cookies.user_sid) {
      //   req.session.passport.user;
      //   res.redirect("/speakers");
      //} else {
        next();
      //}
    };

    app.get("/authcheck", sessionChecker, (req, res) => {
      res.redirect("/login");
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
