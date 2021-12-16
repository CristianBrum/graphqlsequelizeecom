'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'customers',
      [
        {
          storeCustomerName: 'John',
          storeCustomerLastName: 'Jhones roules',
          storeCustomerEmail: 'johndoe@example.com',
          storeCustomerDocumentNumber: '025.824.277-55',
          storeCustomerBirthDate: '17/08/1984',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          storeCustomerName: 'Cristian',
          storeCustomerLastName: 'Brum Oliveira',
          storeCustomerEmail: 'cristian.brum2@yahoo.com.br',
          storeCustomerDocumentNumber: '028.955.442-05',
          storeCustomerBirthDate: '27/04/1992',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          storeCustomerName: 'Tulio',
          storeCustomerLastName: 'Maravilha',
          storeCustomerEmail: 'tulio.maravilha@gmail.com',
          storeCustomerDocumentNumber: '525.351.680-42',
          storeCustomerBirthDate: '10/11/1992',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          storeCustomerName: 'maria',
          storeCustomerLastName: 'helena',
          storeCustomerEmail: 'maria.helena@gmail.com',
          storeCustomerDocumentNumber: '525.311.680-25',
          storeCustomerBirthDate: '15/01/1975',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('customers', null, {}),
};
