'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productName: DataTypes.STRING,
    firstPictureUrl: DataTypes.STRING,
    variationDescription: DataTypes.TEXT,
    productWeight: DataTypes.DECIMAL(4, 2),
    unitPrice: DataTypes.DECIMAL(4, 2),
    stockQuantity: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'products' });

  return Product;
};
