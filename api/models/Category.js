const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');

class Category extends Model {}

Category.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { sequelize: db, modelName: 'categories' }
);

module.exports = Category;
