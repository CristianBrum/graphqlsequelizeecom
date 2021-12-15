'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      storeCustomerStreet: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerNeighborhood: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerCity: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerState: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerCountry: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerPostalCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      storeCustomerNumber: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('addresses');
  },
};
