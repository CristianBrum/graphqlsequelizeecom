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
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerLastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerEmail: {
        allowNull: false,
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
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customers');
  },
};
