const { UserInputError } = require('apollo-server');
const { ordersItems, products } = require('../../../models');
const schema = require('./validation');

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
    async createOrderItem(_, { data }, { auth }) {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      const { productId: id } = data;
      const { stockQuantity } = await products.findByPk(id);
      if (data.quantity <= stockQuantity) {
        await products.update(
          { stockQuantity: stockQuantity - data.quantity },
          { where: { id } },
        );
        const test = await ordersItems.create(data);
        return test;
      }
      throw new UserInputError('Quantidade indisponivel');
    },

    updateOrderItem: async (_, { id, data }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const findId = await ordersItems.findByPk(id);
      const updateOrderItem = await findId.update(data, { where: { id } });
      return updateOrderItem;
    },

    deleteOrderItem: async (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const updateOrderItem = await ordersItems.destroy({ where: { id } });
      return updateOrderItem;
    },
  },

  OrderItem: {
    async products(order) {
      return order.getProducts();
    },
  },
};

module.exports = resolvers;
