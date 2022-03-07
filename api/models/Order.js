const { DataTypes, Model } = require('sequelize');
const db = require('./_db');

class Order extends Model {}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: 'orders' }
);

module.exports = Order;
