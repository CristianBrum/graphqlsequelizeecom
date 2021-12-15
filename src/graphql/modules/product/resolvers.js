const { UserInputError } = require('apollo-server');
const { products } = require('../../../models');
const schema = require('./validation');

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
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return products.create(data);
    },
  },
};

module.exports = resolvers;
