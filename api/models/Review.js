const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');

class Review extends Model {}

Review.init(
  {
    reviewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reviewMessage: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  { sequelize: db, modelName: 'reviews' }
);

module.exports = Review;
