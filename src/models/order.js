'use strict';

const { ORDER_STATUS } = require('../utils/orderStatus');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('orders', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    installments: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    status: {
      type: DataTypes.INTEGER,
      values: [
        ORDER_STATUS.processed.ordinal,
        ORDER_STATUS.delivered.ordinal,
        ORDER_STATUS.shipped.ordinal,
      ],
    },
  }, { timestamps: false, tableName: 'orders' });

  Order.associate = (models) => {
    Order.belongsTo(models.customers, {
      foreignKey: 'userId',
      as: 'customers',
    });
    Order.belongsTo(models.addresses, {
      foreignKey: 'addressId',
      as: 'addresses',
    });
    Order.hasMany(models.ordersItems, {
      foreignKey: 'orderId',
      as: 'ordersItems',
    });
  };

  return Order;
};
