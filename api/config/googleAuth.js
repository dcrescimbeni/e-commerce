const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {User} = require('../models')
passport.use(new GoogleStrategy({
    clientID:'758091135047-r1h2vur30is7rokc0qbdhl5nnv8vtcf6.apps.googleusercontent.com' ,
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log(profile)
    User.findOrCreate({ googleId: profile.id  }, function (err, user) {
      return done(err, user);
    });
  }
));