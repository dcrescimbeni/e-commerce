const express = require('express');
const router = express.Router();
const product = require('./Products');
const user = require('./Users');
const category = require('./Categories');
const order = require('./Orders');
const admin = require('./Admins');

router.use('/products', product);
router.use('/users', user);
router.use('/orders', order);
router.use('/categories', category);
router.use('/admin', admin);

module.exports = router;
