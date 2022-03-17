const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');

class Product extends Model {}

Product.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize: db, modelName: 'products' }
);

module.exports = Product;
