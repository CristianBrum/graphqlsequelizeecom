const { products } = require('../../../models');

const resolvers = {
  Query: {
    product: (_, { id }) => {
      return products.findByPk(id);
    },
    allProduct: () => {
      return products.findAll();
    },
  },
  Mutation: {
    async createProduct(_, { data }) {
      const prod = await products.create(data);
      return prod;
    },
  },
};

module.exports = resolvers;
