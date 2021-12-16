const { ordersItems, products } = require('../../../models');

const resolvers = {
  Query: {
    orderItem: (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return ordersItems.findByPk(id);
    },
    allOrdersItems: (_, args, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return ordersItems.findAll();
    },
  },
  Mutation: {
    async createOrderItem(_, { data }) {
      return ordersItems.create(data);
    },
  },
  OrderItem: {
    async products(order) {
      return order.getProducts();
    },
  },
};

module.exports = resolvers;
