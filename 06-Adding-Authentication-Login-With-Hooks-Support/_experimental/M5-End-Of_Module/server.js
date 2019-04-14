const axios = require("axios");

const express = require("express");
const next = require("next");
const path = require("path");

const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").load();
// }

// for the sake of production, if we can not set from .env that must mean
// we are really running in production so always use real site. If we want to change
// this in real production, we can always change the env variable on server with docker
const RESTBASE = "http://localhost:4000";
//   process && process.env && process.env.RESTBASE
//     ? process.env.RESTBASE
//     : "https://www.siliconvalley-codecamp.com";
//
// console.log(`RESTBASE:${RESTBASE}`);

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
console.log(`server.ts:process.env.RESTBASE (from next.js): ${RESTBASE}`);
//console.log(`server.ts:RESTURL_BASE:${RESTURL_BASE}`);

// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
//The user id (you provide as the second argument of the done function) is saved in the session and is
//   later used to retrieve the whole object via the deserializeUser function.
passport.serializeUser(function(userInfo, done) {
  console.log(`serializeUser:userId:`,userInfo.returnStatus);
  done(null, userInfo);
});

// The first argument of deserializeUser corresponds to the key of the user object that was given to
// the done function (see 1.). So your whole object is retrieved with help of that key. That key here is the user id
// (key can be any key of the user object i.e. name,email etc).
// In deserializeUser that key is matched with the in memory array / database or any data resource.
passport.deserializeUser(function(userInfo, cb) {
  console.log(
      `server.ts:deserializerUser:userInfo:1`,userInfo.returnStatus
  );
  cb(null, userInfo);
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log(`server.ts:new LocalStrategy:username:${username}`);
    const authUrl = RESTBASE + "/rpc/account/Login";
    axios({
      url: authUrl,
      method: "POST",
      data: { username, password } // ignored if in dev mode, only relevant when calling prod server
    })
      .then(function(response) {

        const isLoggedIn = response.data.returnStatus === "OK";
        //console.log(`server.ts:new LocalStrategy:response.data.returnStatus:${response.data.returnStatus}:isLoggedIn:${isLoggedIn}`);
        // console.log(
        //     `server.ts:authUrl:${authUrl}:response.data:${JSON.stringify(
        //         response.data
        //     )}`
        // );
        if (isLoggedIn === true) {
          const userInfo = {
            id: response.data.attendeeResults.attendeesId,
            userFirstName: response.data.attendeeResults.userFirstName,
            userLastName: response.data.attendeeResults.userLastName,
            username: response.data.attendeeResults.username,
            sessionGuid: response.data.attendeeResults.sessionGuid,
            registeredCurrentYear:
              response.data.attendeeResults.registeredCurrentYear,
            isAdmin: response.data.isAdmin,
            eventName: response.data.eventName
          };

          // console.log(
          //     `server.tsx:passport.use:userInfo.id:${
          //         userInfo.id
          //     }:userFirstName:${userInfo.userFirstName}`
          // );
          return done(null, userInfo); // done(.. sends to serialize)
        } else {
          return done(false, false, {
            message: response.data.returnStatus
          });
        }
      })
      .catch(function(error) {
        console.log(
          `server.ts:catch:axios failed to:${authUrl}:error:${error.message}`
        );
        return done(false, false, {
          message: error.message
        });
      });
  })
);

const processExpressPrepare = (userDefaultData) => {
  // @ts-ignore
  app
    .prepare()
    .then(() => {
      const server = express();

      server.use(cookieParser("keyboard cat"));
      server.use(
        bodyParser.urlencoded({
          extended: true
        })
      );
      server.use(bodyParser.json());
      server.use(
        session({
          key: "user_sid",
          secret: "qtgXetyQVjy3XAU6r5Mgf2nT5",
          resave: true,
          saveUninitialized: true,
          httpOnly: true,
          cookie: {
            maxAge: 1000 * 60 * 60, // 1000 * 60 * 60 is 1 hour
            //secure: "auto" // careful because https   https://www.npmjs.com/package/express-session  todo
            secure: false // allows over http for local dev
          }
        })
      );
      server.use(flash());
      server.use(passport.initialize());
      server.use(passport.session());

      // @ts-ignore
      server.use(async (req, res, next) => {
        req.userDefault = userDefaultData;
        next();
      });

      server.get("/error", function(req, res) {
        //var aaa = req.flash("error")[0];
        return app.render(req, res, "/error");
      });

      server.get("/flash", function(req, res) {
        req.flash("info", "Flash is back!");
        res.redirect("/error");
      });

      server.get("/logout", (req, res) => {
        //console.log('in server.js logout called...');
        req.logout();
        res.redirect("/");
      });

      server.get("/login", (req, res) => {
        //console.log('in server.js login GET called...');
        return app.render(req, res, "/login");
      });

      // server.post(
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
      //     console.log(
      //         `success: server.post login   req.user.username:${
      //             req.user.username
      //         }  req.authInfo.message:${req.authInfo.message}`
      //     );
      //   }
      // );

      // middleware function to check for logged-in users
      var sessionChecker = (req, res, next) => {
        console.log(`req.isAuthenticated:${req.isAuthenticated()}`);

        if (req.session.user && req.cookies.user_sid) {
          req.session.passport.user;
          res.redirect("/authenticated");
        } else {
          next();
        }
      };

      server.get("/authcheck", sessionChecker, (req, res) => {
        res.redirect("/login");
      });

      server.get("*", (req, res) => {
        // if (
        //     req.url === "/" ||
        //         req.url === "/speakers" ||
        //         req.url === "/sessions"
        // ) {
        //     return renderAndCache(req, res, req.url, {});
        // } else {

        //console.log(`server.ts:server.get(*):req.user`);
        return handle(req, res);
        //}
      });

      // @ts-ignore
      server.listen(3000, err => {
        if (err) throw err;
        console.log("> Ready on http://localhost:3000...");
      });
    })
    // @ts-ignore
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
};

//

let urlInfo = RESTBASE + "/rpc/Account/IsLoggedIn";
console.log(`server.ts:mainloop processExpressPrepare:urlInfo:`,urlInfo);

axios({
  url: urlInfo,
  method: "post"
})
  .then(response => {
    const userDefaultData = response.data;
    console.log(`server.ts.mainloop:response.data:`,userDefaultData);
    processExpressPrepare(userDefaultData);
  })
  .catch(error => {
    console.log("failure to call axios..." + error.message);
    const userDefaultData = {
      id: 0,
      eventName: "Silicon Valley Code Camp..."
    };
    processExpressPrepare(userDefaultData);
  });
