const { UserInputError } = require('apollo-server');
const { ordersItems, products, customers, orders } = require('../../../models');
const { sendConfirmationEmail } = require('../../../utils/sendMail');
const schema = require('./validation');

const resolvers = {
  Query: {
    orderItem: (_, { id }) => {
      return ordersItems.findByPk(id);
    },
    allOrdersItems: (_, args) => {
      return ordersItems.findAll();
    },
  },
  Mutation: {
    async createOrderItem(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }

      const { productId: id } = data;
      const product = await products.findByPk(id);
      const { stockQuantity } = product;
      if (data.quantity <= stockQuantity) {
        await products.update(
          { stockQuantity: stockQuantity - data.quantity },
          { where: { id } },
        );
        const ord = await ordersItems.findAll();
        const filterOrd = ord
          .filter((item) => item.orderId === data.orderId)
          .map((ids) => ids.productId);
        if (filterOrd.includes(data.productId) === true) {
          throw new Error('Este item já está no seu Carrinho.');
        }

        const productInCart = await products.findAll({
          where: { id: filterOrd },
        });

        const productQuantity = await ordersItems.findAll({
          where: { id: filterOrd },
        });

        const quanty = await productQuantity.map(({ quantity }) => quantity);

        const items = await productInCart.map(({ productName }) => productName);

        const order = await orders.findByPk(data.orderId);
        const user = await customers.findByPk(order.userId);

        const createOrderItem = await ordersItems.create(data);
        sendConfirmationEmail(user, items, quanty, order);
        return createOrderItem;
      }

      throw new UserInputError('Quantidade indisponivel');
    },

    updateOrderItem: async (_, { id, data }) => {
      const findId = await ordersItems.findByPk(id);
      const updateOrderItem = await findId.update(data, { where: { id } });
      return updateOrderItem;
    },

    deleteOrderItem: async (_, { id }) => {
      const updateOrderItem = await ordersItems.destroy({ where: { id } });
      return updateOrderItem;
    },
  },

  OrderItem: {
    async products(order) {
      return order.getProducts();
    },
    async order(order) {
      return order.getOrders();
    },
  },
};

module.exports = resolvers;
