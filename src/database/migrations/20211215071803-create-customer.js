'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      storeCustomerName: {
        type: Sequelize.STRING,
      },
      storeCustomerLastName: {
        type: Sequelize.STRING,
      },
      storeCustomerEmail: {
        type: Sequelize.STRING,
        unique: true,
      },
      storeCustomerDocumentNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      storeCustomerBirthDate: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('customers');
  },
};
