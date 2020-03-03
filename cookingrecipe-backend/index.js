require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const recipeService = require("./service/recipe");
const userService = require("./service/user");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For passport
app.use(
  session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })
); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions

require("./config/passport.js")(passport, db.User);

db.sequelize
  .sync({ force: false })
  .then(() => {
    recipeService(app, db);
    userService(app, db);

    app.listen(5000, () => {
      console.log("server running at port 5000.");
    });
  })
  .catch(err => {
    console.log("something error" + err);
  });
