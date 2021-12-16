const { orders } = require('../../../models');

const resolvers = {
  Query: {
    order: (_, { id }) => {
      return orders.findByPk(id);
    },
    allOrders: () => {
      return orders.findAll();
    },
  },
  Mutation: {
    async createOrder(_, { data }) {
      return orders.create(data);
    },
  },
  Order: {
    async customer(order) {
      return order.getCustomers();
    },
    async address(order) {
      return order.getAddresses();
    },
  },
};

module.exports = resolvers;
