const express = require('express')
const passport = require('passport')
const router = express.Router()
const UsersController = require('../controllers/UsersController')
const authUser = require('../config/auth')

router.post('/register', UsersController.userCreate)

router.post('/login', passport.authenticate('local'), UsersController.userLogin)

router.put('/edit/:id' , UsersController.userEdit)

router.post('/createAdmin' , UsersController.adminCreate)

router.delete('/user/:id' , UsersController.userDelete)