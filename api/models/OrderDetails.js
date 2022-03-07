const { DataTypes, Model } = require('sequelize');
const db = require('./_db');

class OrderDetails extends Model {}

OrderDetails.init(
  {
    orderDetailsId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize: db, modelName: 'orderDetails' }
);

module.exports = OrderDetails;
