'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'products',
      [
        {
          productName: 'caneca',
          firstPictureUrl: 'caneca.png',
          variationDescription: 'produto novo',
          productWeight: 300,
          unitPrice: 20.0,
          stockQuantity: 1000,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          productName: 'caderno',
          firstPictureUrl: 'caderno.jpg',
          variationDescription: 'produto novo',
          productWeight: 150,
          unitPrice: 45.5,
          stockQuantity: 85,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          productName: 'lapis',
          firstPictureUrl: 'lapis.com',
          variationDescription: 'produto novo',
          productWeight: 20,
          unitPrice: 0.5,
          stockQuantity: 150,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          productName: 'caneta',
          firstPictureUrl: 'caneta.com',
          variationDescription: 'produto novo',
          productWeight: 15,
          unitPrice: 3.5,
          stockQuantity: 20,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('products', null, {}),
};
