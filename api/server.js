const express = require('express');
const volleyball = require('volleyball');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const route = require('./routes');
const cors = require('cors');
const path = require('path')
require('./config/auth');
// const { auth } = require('express-openid-connect');

const app = express();

app.use(cors());

app.use(volleyball);
app.use(express.json());

app.use(cookieParser());
app.use(
  session({ secret: 'bootcamp', resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// app.use(auth(config));

app.use('/api', route);

app.use((err, req, res, next) => {
  let enableConsoleLog = true;

  if (enableConsoleLog) {
    console.log('Error');
    console.log(err);
  }
  res.status(500).send(err.message);
});

const PORT = process.env.PORT || 3001

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../public'))
  app.get('*' , (req, res) => {
    req.sendFile(path.resolve(__dirname, '../public ' , 'index,html'))
  })
}

db.sync({ force: false }).then(() => {
  if (!module.parent) {
    app.listen(PORT, () => {
      console.log(`Server up on port Port ${PORT}`);
    });
  }
});

module.exports = app;
