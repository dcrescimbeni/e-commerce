const express = require('express');
const passport = require('passport');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.get('/users', AdminController.getUsers);

router.put('/user/:id', AdminController.giveAdmin);

module.exports = router;
