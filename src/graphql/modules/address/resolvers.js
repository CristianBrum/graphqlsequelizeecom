const { UserInputError } = require('apollo-server');
const schema = require('./validation');

const { addresses } = require('../../../models');

const resolvers = {
  Query: {
    address: (_, { id }) => {
      return addresses.findByPk(id);
    },
    allAddress: (_, args) => {
      return addresses.findAll();
    },
  },
  Mutation: {
    async createAddress(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return addresses.create(data);
    },
    updateAddress: async (_, { id, data }) => {
      const findId = await addresses.findByPk(id);
      const updateAddress = await findId.update(data, { where: { id } });
      return updateAddress;
    },
    deleteAddress: async (_, { id }) => {
      const deleteAddress = await addresses.destroy({ where: { id } });
      return deleteAddress;
    },
  },
  Address: {
    async customer(address) {
      return address.getCustomers();
    },
  },
};

module.exports = resolvers;
