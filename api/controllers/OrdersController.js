const Order = require("../models/Order");
const User = require("../models/User");
const OrderDetails = require('../models/OrderDetails')

exports.createOrder = (req, res, next) => {
  
  User.findOne({ where: { userId: req.params.id } })
  .then(() => {
    const orderObj = {
            address : req.body.address,
            total: req.body.total,
            userId : req.params.id
    };
    const orderObjDetail = {
        quantity : req.body.quantity,
        price : req.body.price,
    }
    Order.create(orderObj)
      .then((data) => {
          orderObjDetail['orderId'] = data.dataValues.orderId
          OrderDetails.create(orderObjDetail)
      })
      .then(()=> res.send(202))
      .catch((err) => next(err));
  });
};

