'use strict';

const { ORDER_STATUS } = require('../utils/orderStatus');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    installments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      values: [
        ORDER_STATUS.processed.ordinal,
        ORDER_STATUS.delivered.ordinal,
        ORDER_STATUS.shipped.ordinal,
      ],
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'addresses',
        key: 'id',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.customers, {
      foreignKey: 'userId',
      as: 'customers',
    });
    Order.belongsTo(models.addresses, {
      foreignKey: 'addressId',
      as: 'addresses',
    });
  };

  return Order;
};
