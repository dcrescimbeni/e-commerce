const express = require('express');
const router = express.Router();
const product = require('./Products');
const user = require('./Users');
const category = require('./Categories');
const order = require('./Orders');

router.use('/products', product);
router.use('/users', user);
router.use('/orders', order);
router.use('/categories', category);

module.exports = router;
