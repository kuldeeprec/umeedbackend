const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
//middleware
const db = require("./config/mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const passportJWT = require("./config/passport-jwt-strategy");
app.use(passport.initialize());
const cors = require("cors");
// app.use(passport.session());
app.use(cookieParser());
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    console.log("err is connectin", err);
    return;
  } else {
    console.log("server is running", port);
  }
});
