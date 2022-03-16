const passport = require('passport');
const LocalStrategy = require('passport-local');
const { User } = require('../models');
const bcrypt = require('bcrypt');
// require('dotenv').config();

// export const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.CLIENT_ID,
//   baseURL: process.env.URL_BASE,
//   clientID: process.env.CLIENT_SECRET,
//   issuerBaseURL: process.env.URL
// };

const verifyCallback = (email, password, done) => {
  User.findOne({ where: { email } })
    .then((res) => {
      if (!res) {
        done(null, false);
        return;
      }
      let user = res.dataValues;
      bcrypt.compare(password, user.password).then((isValid) => {
        if (isValid) done(null, user);
        else done(null, false);
      });
    })
    .catch((err) => done(err));
};

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  verifyCallback
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser((userId, done) => {
  User.findByPk(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
