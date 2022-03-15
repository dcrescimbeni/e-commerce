const express = require('express');
const router = express.Router();
const OrdersController = require('../controllers/OrdersController')

router.post('/thanks/:id', OrdersController.createOrder)

module.exports = router
