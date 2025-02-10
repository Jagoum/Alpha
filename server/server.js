require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./auth");
const routes = require("./routes");
const path = require('path'); 

const app = express();

app.set('view engine', 'ejs');

// app.set('views', path.join(app, 'views'));

app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, '../app')));

// Example route to render an EJS view
app.get('/', (req, res) => {
  res.render('index');  // This will render "views/index.ejs"
});



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
