const passport = require("passport");

module.exports = (app, db) => {
  app.post("/register", passport.authenticate("local-signup"), function(
    req,
    res
  ) {
    console.log(req.user);
    res.send("homepage");
  });

  app.get("/logout", function(req, res) {
    console.log("Log Out Route Hit");
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      }
      res.send("logout complete");
    });
  });

  app.post("/login", passport.authenticate("local-signin"), function(req, res) {
    console.log(req.user);
    res.send("homepage login success");
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
