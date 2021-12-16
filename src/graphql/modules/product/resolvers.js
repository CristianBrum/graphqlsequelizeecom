const { UserInputError } = require('apollo-server');
const { products } = require('../../../models');
const schema = require('./validation');

const resolvers = {
  Query: {
    product: (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return products.findByPk(id);
    },
    allProduct: (_, args, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return products.findAll();
    },
  },
  Mutation: {
    async createProduct(_, { data }, { auth }) {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return products.create(data);
    },
    updateProduct: async (_, { id, data }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const findId = await products.findByPk(id);
      const updateProduct = await findId.update(data, { where: { id } });
      return updateProduct;
    },
    deleteProduct: async (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const deleteProduct = await products.destroy({ where: { id } });
      return deleteProduct;
    },
  },
};

module.exports = resolvers;
