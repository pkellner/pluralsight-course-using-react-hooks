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

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

// for the sake of production, if we can not set from .env that must mean
// we are really running in production so always use real site. If we want to change
// this in real production, we can always change the env variable on server with docker
const RESTBASE =
  process && process.env && process.env.RESTBASE
    ? process.env.RESTBASE
    : "https://www.siliconvalley-codecamp.com";

console.log(`RESTBASE:${RESTBASE}`);

var proxy = require("express-http-proxy");

import { IUserInfo } from "./src/components/codecamp/common/CodeCampInterfaces";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
console.log(`server.ts:process.env.RESTBASE (from next.js): ${RESTBASE}`);
//console.log(`server.ts:RESTURL_BASE:${RESTURL_BASE}`);

// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
//The user id (you provide as the second argument of the done function) is saved in the session and is
//   later used to retrieve the whole object via the deserializeUser function.
passport.serializeUser(function(userInfo: IUserInfo, cb: any) {
  //console.log(`serializeUser:userId:${JSON.stringify(userInfo)}`);
  cb(null, userInfo);
});

// The first argument of deserializeUser corresponds to the key of the user object that was given to
// the done function (see 1.). So your whole object is retrieved with help of that key. That key here is the user id
// (key can be any key of the user object i.e. name,email etc).
// In deserializeUser that key is matched with the in memory array / database or any data resource.
passport.deserializeUser(function(userInfo: IUserInfo, cb: any) {
  // console.log(
  //     `server.ts:deserializerUser:userInfo:${JSON.stringify(userInfo)}`
  // );
  cb(null, userInfo);
});

// axios.post('https://www.siliconvalley-codecamp.com/rpc/account/Login', {
//     username: 'test77',
//     password: 'test77x',
//     rememberMe: true
// })

passport.use(
  new LocalStrategy(function(username: string, password: string, done: any) {
    //console.log(`server.ts:new LocalStrategy:username:${username}`);
    const authUrl = RESTBASE + "/rpc/account/Login";
    axios({
      url: authUrl,
      method: "POST",
      data: { username, password } // ignored if in dev mode, only relevant when calling prod server
    })
      .then(function(response: any) {
        const isLoggedIn = response.data.returnStatus === "OK";
        //console.log(`server.ts:new LocalStrategy:response.data.returnStatus:${response.data.returnStatus}:isLoggedIn:${isLoggedIn}`);
        // console.log(
        //     `server.ts:authUrl:${authUrl}:response.data:${JSON.stringify(
        //         response.data
        //     )}`
        // );
        if (isLoggedIn === true) {
          const userInfo: IUserInfo = {
            id: response.data.attendeeResults.attendeesId,
            userFirstName: response.data.attendeeResults.userFirstName,
            userLastName: response.data.attendeeResults.userLastName,
            username: response.data.attendeeResults.username,
            sessionGuid: response.data.attendeeResults.sessionGuid,
            registeredCurrentYear:
              response.data.attendeeResults.registeredCurrentYear,
            codeCampYearId: response.data.codeCampYearId,
            attendeesImageUrl: response.data.attendeesImageUrl,
            isAdmin: response.data.isAdmin,
            showAgendaOnSchedule: response.data.showAgendaOnSchedule,
            registrationStatus: response.data.registrationStatus,
            showRegistration: response.data.showRegistration,
            showRoomOnSchedule: response.data.showRoomOnSchedule,
            showSessionInterest: response.data.showSessionInterest,
            showSessionInterestCount: response.data.showSessionInterestCount,
            showSessionPlanAheadCount: response.data.showSessionPlanAheadCount,
            scheduleAllowCheckAttend: response.data.scheduleAllowCheckAttend,
            showTrackOnSession: response.data.showTrackOnSession,
            cloudFrontCacheServer: response.data.cloudFrontCacheServer,
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
      .catch(function(error: any) {
        console.log(
          `server.ts:catch:axios failed to:${authUrl}:error:${error.message}`
        );
        return done(false, false, {
          message: error.message
        });
      });
  })
);

const processExpressPrepare = (userDefaultData: any) => {
  // @ts-ignore
  app
    .prepare()
    .then(() => {
      const server = express();

      console.log(`about to proxy RESTBASE to /svcc ${RESTBASE}`);
      server.use("/svcc", proxy(RESTBASE));

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
            secure: "auto" // careful because https   https://www.npmjs.com/package/express-session  todo
          }
        })
      );
      server.use(flash());
      server.use(passport.initialize());
      server.use(passport.session());

      // @ts-ignore
      server.use(async (req: any, res: any, next: any) => {
        req.userDefault = userDefaultData;
        next();
      });

      server.get("/error", function(req: any, res: any) {
        //var aaa = req.flash("error")[0];
        return app.render(req, res, "/error");
      });

      server.get("/flash", function(req: any, res: any) {
        req.flash("info", "Flash is back!");
        res.redirect("/error");
      });

      server.get("/logout", (req: any, res: any) => {
        //console.log('in server.js logout called...');
        req.logout();
        res.redirect("/");
      });

      server.get("/login", (req: any, res: any) => {
        //console.log('in server.js login GET called...');
        return app.render(req, res, "/login");
      });

      server.post(
        "/login",
        passport.authenticate("local", {
          failureRedirect: "/login",
          successRedirect: "/tagfavorites",
          successFlash: "Welcome!",
          failureFlash: true
        }),
        () => {
          //console.log(`server.post:/login`);
          //
          // console.log(
          //     `success: server.post login   req.user.username:${
          //         req.user.username
          //     }  req.authInfo.message:${req.authInfo.message}`
          // );
        }
      );

      // middleware function to check for logged-in users
      var sessionChecker = (req: any, res: any, next: any) => {
        //console.log(`req.isAuthenticated:${req.isAuthenticated()}`);

        if (req.session.user && req.cookies.user_sid) {
          req.session.passport.user;

          res.redirect("/authenticated");
        } else {
          next();
        }
      };

      // @ts-ignore
      server.get("/authcheck", sessionChecker, (req: any, res: any) => {
        res.redirect("/login");
      });

      server.get("*", (req: any, res: any) => {
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
console.log(`server.ts:mainloop processExpressPrepare:urlInfo:${urlInfo}`);
// let methodForInfo: string;
// if (process.env.NODE_ENV === 'production') {
//     urlInfo = `${RESTURL_BASE}/rpc/Account/IsLoggedIn`;
//     methodForInfo = 'post';
// } else {
//     urlInfo = `${RESTURL_BASE}/isloggedinyes`;
//     methodForInfo = 'get';
// }
// console.log(
//     `About to call axios for user data. urlInfo:${urlInfo}  ${methodForInfo}`
// );
axios({
  url: urlInfo,
  method: "post"
})
  .then((response: any) => {
    const userDefaultData: IUserInfo = response.data;
    //console.log(`server.ts.mainloop:response.data:${userDefaultData}`);
    processExpressPrepare(userDefaultData);
  })
  .catch((error: any) => {
    console.log("failure to call axios..." + error.message);
    const userDefaultData = {
      id: 0,
      eventName: "Silicon Valley Code Camp..."
    };
    processExpressPrepare(userDefaultData);
  });
