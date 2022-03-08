const { DataTypes, Model } = require('sequelize');
const db = require('./_db');

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
        min: 0,
        max: 1,
      },
    },
  },
  { sequelize: db, modelName: 'reviews' }
);

module.exports = Review;
