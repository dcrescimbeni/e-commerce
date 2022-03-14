const express = require('express');
const passport = require('passport');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.post('/register', UsersController.userCreate);

router.post(
  '/login',
  passport.authenticate('local'),
  isAuth,
  UsersController.userLogin
);

router.put('/edit/:id', UsersController.userEdit);

router.get('/logout', UsersController.userLogout);

router.put('/edit/:id', UsersController.userEdit);

router.get('/me', UsersController.getUser);

router.get('/admin/users', UsersController.getUsers);

router.put('/admin/user/:id', UsersController.giveAdmin);

module.exports = router;
