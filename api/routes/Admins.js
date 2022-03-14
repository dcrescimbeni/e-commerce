const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.get('/users/all', isAuth, isAdmin, AdminController.getUsers);
router.put('/user/:id', isAuth, isAdmin, AdminController.setAdmin);
module.exports = router;
