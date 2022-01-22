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
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstPictureUrl: {
        type: Sequelize.STRING,
      },
      variationDescription: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      productWeight: {
        type: Sequelize.DECIMAL(4, 2),
      },
      unitPrice: {
        type: Sequelize.DECIMAL(4, 2),
      },
      stockQuantity: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
