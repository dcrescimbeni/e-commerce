const Order = require("../models/Order");
const User = require("../models/User");
const OrderDetails = require('../models/OrderDetails');


exports.createOrder = (req, res, next) => {
  console.log(req.body)
  User.findOne({ where: { userId: req.params.id } })
    .then(() => {
      const orderObj = {
        address: req.body.address,
        total: req.body.total,
        userId: req.params.id
      };
      
      Order.create(orderObj)
        .then((data) => {
          req.body.products.map(product => {
            product['orderId'] = data.dataValues.orderId
            OrderDetails.create(product)
          })

        })
        .then(() => res.send(202))
        .catch((err) => next(err));
    });
};

