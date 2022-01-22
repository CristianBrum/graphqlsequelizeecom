'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('ordersItems', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'ordersItems' });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.orders, {
      foreignKey: 'orderId',
      as: 'orders',
    });
    OrderItem.belongsTo(models.products, {
      foreignKey: 'productId',
      as: 'products',
    });
  };

  return OrderItem;
};
