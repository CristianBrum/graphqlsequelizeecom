'use strict';

module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    'orderItems',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstPictureUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      tableName: 'orderItems',
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
