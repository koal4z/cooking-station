
const passport = require("passport");

const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = function(passport, auth) {
  const Auth = auth;
  const LocalStrategy = require("passport-local").Strategy;

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, email, password, done) {
        console.log("Signup for - ", email);
        const generateHash = function(password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds), null);
        };
        Auth.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          // console.log(user);
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            const userPassword = generateHash(password);
            const data = {
              email: email,
              password: userPassword,
              name: req.body.name
            };

            Auth.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }
              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email

        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        const Auth = auth;

        const isValidPassword = function(userpass, password) {
          return bcrypt.compareSync(password, userpass);
        };
        console.log("logged to", email);
        Auth.findOne({
          where: {
            email: email
          }
        })
          .then(function(user) {
            console.log(user);
            if (!user) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }
            const userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );


  passport.serializeUser(function(auth, done) {
    done(null, auth.id);
  });


  passport.deserializeUser(function(id, done) {
    Auth.findByPk(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};
