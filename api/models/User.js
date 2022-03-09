const { DataTypes, Model } = require('sequelize');
const db = require('./_db');
const bcrypt = require('bcrypt')

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    billingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.STRING,
    }
  },
  { sequelize: db, modelName: 'users' }
);

User.beforeCreate((user) => {
  return bcrypt.hash(user.password, 10).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
