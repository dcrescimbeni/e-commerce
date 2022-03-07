const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const OrderDetails = require('./OrderDetails');

// Product.hasMany(Category);
// Category.hasMany(Product);

module.exports = { Category, Product, User, OrderDetails };
