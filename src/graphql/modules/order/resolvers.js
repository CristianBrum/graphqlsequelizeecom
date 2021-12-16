const { orders } = require('../../../models');

const resolvers = {
  Query: {
    order: (_, { id }) => {
      return orders.findByPk(id);
    },
    allOrders: () => {
      orders.findAll();
    },
  },
  Mutation: {
    async createOrder(_, { data }) {
      return orders.create(data);
    },
  },
};

module.exports = resolvers;
