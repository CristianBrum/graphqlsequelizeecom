'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'orders',
      [
        {
          status: 0,
          userId: 1,
          addressId: 2,
          installments: 12,
        },
        {
          status: 1,
          userId: 2,
          addressId: 2,
          installments: 3,
        },
        {
          status: 2,
          userId: 3,
          addressId: 1,
          installments: 10,
        },
        {
          status: 1,
          userId: 4,
          addressId: 2,
          installments: 5,
        },
        {
          status: 1,
          userId: 2,
          addressId: 1,
          installments: 6,
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('orders', null, {}),
};
