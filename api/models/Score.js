const { DataTypes, Model, INTEGER } = require('sequelize');
const db = require('./_db');

class Score extends Model {}

Score.init(
  {
    scoreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    score: {
      type: INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
  },
  { sequelize: db, modelName: 'scores' }
);

module.exports = Score;
