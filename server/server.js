require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./auth");
const routes = require("./routes");

const app = express();

// Middleware for session management
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(routes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
