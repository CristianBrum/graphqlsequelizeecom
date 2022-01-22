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
          productWeight: 7.50,
          unitPrice: 20.0,
          stockQuantity: 1000,
        },
        {
          productName: 'caderno',
          firstPictureUrl: 'caderno.jpg',
          variationDescription: 'produto novo',
          productWeight: 7.50,
          unitPrice: 45.5,
          stockQuantity: 85,
        },
        {
          productName: 'lapis',
          firstPictureUrl: 'lapis.com',
          variationDescription: 'produto novo',
          productWeight: 7.50,
          unitPrice: 0.5,
          stockQuantity: 150,
        },
        {
          productName: 'caneta',
          firstPictureUrl: 'caneta.com',
          variationDescription: 'produto novo',
          productWeight: 7.50,
          unitPrice: 3.5,
          stockQuantity: 20,
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('products', null, {}),
};
