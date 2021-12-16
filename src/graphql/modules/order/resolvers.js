const { UserInputError } = require('apollo-server');
const { orders } = require('../../../models');
const schema = require('./validation');

const resolvers = {
  Query: {
    order: (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return orders.findByPk(id);
    },
    allOrders: (_, args, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return orders.findAll();
    },
  },
  Mutation: {
    async createOrder(_, { data }, { auth }) {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return orders.create(data);
    },
    updateOrder: async (_, { id, data }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const findId = await orders.findByPk(id);
      const updateOrder = await findId.update(data, { where: { id } });
      return updateOrder;
    },
    deleteOrder: async (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const deleteOrder = await orders.destroy({ where: { id } });
      return deleteOrder;
    },
  },
  Order: {
    async customer(order) {
      return order.getCustomers();
    },
    async address(order) {
      const test = await order.getAddresses();
      return test;
    },
    async orderItem(order) {
      return order.getOrdersItems();
    },
  },
};

module.exports = resolvers;
