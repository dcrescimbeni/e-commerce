const { DataTypes, Model } = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt');

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
    },
  },
  { sequelize: db, modelName: 'users' }
);

// Password hashing
User.beforeCreate((user) => {
  return bcrypt.hash(user.password, 10).then((hash) => {
    user.password = hash;
  });
});

// If shippingAddress is null, sets billingAddress as shippingAddress
User.beforeCreate((user) => {
  if (!user.shippingAddress) {
    user.shippingAddress = user.billingAddress;
  }
});

// Sets the email to lowercase
User.beforeCreate((user) => {
  user.email = user.email.toLowerCase();
});
module.exports = User;
