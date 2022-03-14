const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.get('/users/all', isAuth, isAdmin, AdminController.getUsers);

router.put('/user/:id', AdminController.giveAdmin);

module.exports = router;
