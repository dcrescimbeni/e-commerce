const express = require('express');
const passport = require('passport');
const router = express.Router();
const product = require('./Products');
const user = require('./Users');
const admin = require('./Admins');

router.use('/products', product);
router.use('/users', user);
router.use('/admin', admin);

module.exports = router;
