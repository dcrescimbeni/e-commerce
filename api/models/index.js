const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const OrderDetails = require('./OrderDetails');

// Relationships
Product.belongsToMany(Category, { through: 'ProductCategory' });
Category.belongsToMany(Product, { through: 'ProductCategory' });

Product.belongsToMany(OrderDetails, { through: 'OrderDetailsProduct' });
OrderDetails.belongsToMany(Product, { through: 'OrderDetailsProduct' });

Order.hasOne(OrderDetails, { foreignKey: 'orderId' });
OrderDetails.belongsTo(Order);

User.hasMany(Order);
Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = { Category, Product, User, Order, OrderDetails };
