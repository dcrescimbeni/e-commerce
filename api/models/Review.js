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
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'reviews' }
);

module.exports = Review;
