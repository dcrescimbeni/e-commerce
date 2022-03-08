const express = require('express')
const passport = require('passport')
const router = express.Router()
const UsersController = require('../controllers/UsersController')


router.post('/register',UsersController.userCreate)

router.post('/login', passport.authenticate('local'), UsersController.userLogin)

router.put('/edit/:id' , UsersController.userEdit)

router.delete('/admin/user/:id' , UsersController.userDelete)

router.get('/admin/users' , UsersController.getUsers)

router.put('/admin/user/:id', UsersController)

module.exports = router