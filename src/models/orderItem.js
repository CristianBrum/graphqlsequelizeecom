'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    'ordersItems',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    {
      tableName: 'ordersItems',
    },
  );

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
