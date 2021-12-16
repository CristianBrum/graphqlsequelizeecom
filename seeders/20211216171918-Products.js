'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'products',
      [
        {
          productName: 'caneca',
          firstPictureUrl:
            'https://img.elo7.com.br/product/original/36E9316/caneca-com-nome-bruna-chuva-de-coracoes.jpg',
          variationDescription: 'produto novo',
          productWeight: 300,
          unitPrice: 20.0,
          stockQuantity: 1000,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          productName: 'caderno',
          firstPictureUrl:
            'https://m.media-amazon.com/images/I/61ypxWlKLoL._AC_SY355_.jpg',
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
          unitPrice: 20.0,
          stockQuantity: 10,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          productName: 'caneta',
          firstPictureUrl: 'caneta.com',
          variationDescription: 'produto novo',
          productWeight: 5,
          unitPrice: 20.0,
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
