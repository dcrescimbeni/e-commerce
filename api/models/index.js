const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const OrderDetails = require('./OrderDetails');
const Review = require('./Review');
const Score = require('./Score');

// Relationships
Product.belongsToMany(Category, { through: 'ProductCategory' });
Category.belongsToMany(Product, { through: 'ProductCategory' });

Product.belongsToMany(OrderDetails, { through: 'OrderDetailsProduct' });
OrderDetails.belongsToMany(Product, { through: 'OrderDetailsProduct' });

Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Score, { foreignKey: 'productId' });
Score.belongsTo(Product, { foreignKey: 'productId' });

Order.hasOne(OrderDetails, { foreignKey: 'orderId' });
OrderDetails.belongsTo(Order, { foreignKey: 'orderId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = { Category, Product, User, Order, OrderDetails };
