const express = require('express');
const volleyball = require('volleyball');
const db = require('./models/_db');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
require('./config/auth')

const Users = require('./routes/Users')

const app = express();

app.use(volleyball);
app.use(express.json());


app.use(cookieParser())
app.use(session({secret : 'bootcamp'}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',Users)

app.use((err, req, res, next) => {
  console.log('Error');
  console.log(err);
  res.status(500).send(err.message);
});


db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log(`Server up on port 3001`);
  });
});

module.exports = app;
