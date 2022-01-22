const { UserInputError } = require('apollo-server');
const { products } = require('../../../models');
const schema = require('./validation');

const resolvers = {
  Query: {
    product: (_, { id }) => {
      return products.findByPk(id);
    },
    allProduct: (_, args) => {
      return products.findAll();
    },
  },
  Mutation: {
    async createProduct(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return products.create(data);
    },
    updateProduct: async (_, { id, data }) => {
      const findId = await products.findByPk(id);
      const updateProduct = await findId.update(data, { where: { id } });
      return updateProduct;
    },
    deleteProduct: async (_, { id }) => {
      const deleteProduct = await products.destroy({ where: { id } });
      return deleteProduct;
    },
  },
};

module.exports = resolvers;
