const express = require('express');
const passport = require('passport');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.post('/register', UsersController.userCreate);

// router.get('/', UsersController.userLoginOAuth)

router.post(
  '/login',
  passport.authenticate('local'),
  UsersController.userLogin
);

router.put('/edit/:id', UsersController.userEdit);

router.get('/logout', UsersController.userLogout);

router.put('/edit/:id', UsersController.userEdit);

router.get('/me', UsersController.getUser);

router.post('/sendMail', UsersController.sendEmail);

router.get('/userOrders/:id', UsersController.getOrders);

module.exports = router;
