'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'customers',
      [
        {
          storeCustomerName: 'John',
          storeCustomerLastName: 'Jhones',
          storeCustomerEmail: 'johndoe@example.com',
          storeCustomerDocumentNumber: '025.824.277-55',
          storeCustomerBirthDate: '17/08/1984',
          password:
            '76a131e30aa76af6:7dd6dffc988eae1a74660a5d2e228f402560030d6ef6552ff4c8ee8f7b427b2ae34f85881df8e72b118956cabe82057fc2a44ce236d6cc6f9e070954cfec25b4',
        },
        {
          storeCustomerName: 'Cristian',
          storeCustomerLastName: 'Brum',
          storeCustomerEmail: 'cristian.brum2@yahoo.com.br',
          storeCustomerDocumentNumber: '025.824.277-00',
          storeCustomerBirthDate: '27/04/1999',
          password:
            '3e6fe2646ae376c3:cf94e56bcd1d0f49b5bbdfa7b8b70b5111b4f8b5b3c07967d41d9937d027d7ba6128caa9de968a6bd757896c14de4d525ba53527be44ecc58af7d6bfb1a6420a',
        },
        {
          storeCustomerName: 'Tulio',
          storeCustomerLastName: 'Maravilha',
          storeCustomerEmail: 'tulio.maravilha@gmail.com',
          storeCustomerDocumentNumber: '525.351.680-42',
          storeCustomerBirthDate: '10/11/1992',
          password:
            'e1162c3be3c6a285:90d598d9e295fd5dc56bddbc80216fdd352d07f32c45a06847e777363fe5b7b485b9f7eeecc5a993b6eabcea29dbf732a6356023b5b80805afbf46416b67693b',
        },
        {
          storeCustomerName: 'Maria',
          storeCustomerLastName: 'Helena',
          storeCustomerEmail: 'maria.helena@gmail.com',
          storeCustomerDocumentNumber: '525.311.680-25',
          storeCustomerBirthDate: '15/01/1975',
          password:
            '115de931b61be110:46b1b59b75e22fc705ae2f5efd563a15bc25d183953819441021357a620fae24c4f5ea55853ede133fc3470bcf96dbe7fec63d476ed72b5ebf02fcdf101af213',
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('customers', null, {}),
};
