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


npm install express path body-parser cookie-parser express-session passport passport-local connect-flash local-storage --save