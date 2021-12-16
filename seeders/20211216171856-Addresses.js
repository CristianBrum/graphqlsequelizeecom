'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'addresses',
      [
        {
          userId: 1,
          storeCustomerStreet: 'Rua Assis Brail',
          storeCustomerNeighborhood: 'Vargas',
          storeCustomerCity: 'Sapucaia do sul',
          storeCustomerState: 'RS',
          storeCustomerCountry: 'Brasil',
          storeCustomerPostalCode: '93222-360',
          storeCustomerNumber: 281,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          userId: 2,
          storeCustomerStreet: 'av. Maua',
          storeCustomerNeighborhood: 'Mathias Velho',
          storeCustomerCity: 'Canoas',
          storeCustomerState: 'SC',
          storeCustomerCountry: 'Brasil',
          storeCustomerPostalCode: '95518-759',
          storeCustomerNumber: 581,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          userId: 3,
          storeCustomerStreet: 'Rua Santa Maria',
          storeCustomerNeighborhood: 'Boa Vista',
          storeCustomerCity: 'Curitiba',
          storeCustomerState: 'PR',
          storeCustomerCountry: 'Brasil',
          storeCustomerPostalCode: '94425-872',
          storeCustomerNumber: 5674,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          userId: 4,
          storeCustomerStreet: 'Rua Santa Luzia',
          storeCustomerNeighborhood: 'Fortuna',
          storeCustomerCity: 'Porto Alegre',
          storeCustomerState: 'RS',
          storeCustomerCountry: 'Brasil',
          storeCustomerPostalCode: '95425-842',
          storeCustomerNumber: 2224,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('addresses', null, {}),
};
