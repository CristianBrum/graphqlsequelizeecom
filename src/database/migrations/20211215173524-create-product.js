'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productName: {
        type: Sequelize.STRING,
      },
      firstPictureUrl: {
        type: Sequelize.STRING,
        unique: true,
      },
      variationDescription: {
        type: Sequelize.STRING,
      },
      productWeight: {
        type: Sequelize.FLOAT,
      },
      unitPrice: {
        type: Sequelize.FLOAT,
      },
      stockQuantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
