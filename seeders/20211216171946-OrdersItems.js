'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'ordersItems',
      [
        {
          quantity: 10,
          productId: 2,
          orderId: 1,
        },
        {
          quantity: 20,
          productId: 1,
          orderId: 2,
        },
        {
          quantity: 3,
          productId: 3,
          orderId: 3,
        },
        {
          quantity: 5,
          productId: 2,
          orderId: 2,
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('ordersItems', null, {}),
};
