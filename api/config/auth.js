const passport = require('passport')
const localStrategy = require('passport-local');
const {User} = require('../models')
const bcrypt = require('bcrypt')

passport.use(
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
        function (email, password, done) {
           
            User.findOne({ where: { email } })
                .then(user => {
                    console.log(user)
                    if (!user) {
                        return done(null, false)
                    }
                    bcrypt.compare(password, user.password).then((isValid) => {
                        if (isValid) done(null, user);
                        else done(null, false);
                      });
                })
        })
)

passport.serializeUser(function (user, done) {
    done(null, user.userId)
})

passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
        .catch(done)

})
