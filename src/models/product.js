'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'products',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
      variationDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productWeight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: 'products',
    },
  );

  return Product;
};
