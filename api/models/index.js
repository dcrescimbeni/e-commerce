const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const OrderDetails = require('./OrderDetails');
const Review = require('./Review');

// Relationships
Product.belongsToMany(Category, {
  through: 'ProductCategory',
  foreignKey: 'productId',
});
Category.belongsToMany(Product, {
  through: 'ProductCategory',
  foreignKey: 'categoryId',
});

Product.hasMany(OrderDetails, { foreignKey: 'productId' });
OrderDetails.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

Order.hasMany(OrderDetails, { foreignKey: 'orderId' });
OrderDetails.belongsTo(Order, { foreignKey: 'orderId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

module.exports = { Category, Product, User, Order, OrderDetails, Review };
