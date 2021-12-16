const { UserInputError } = require('apollo-server');
const schema = require('./validation');

const { addresses } = require('../../../models');

const resolvers = {
  Query: {
    address: (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return addresses.findByPk(id);
    },
    allAddress: (_, args, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return addresses.findAll();
    },
  },
  Mutation: {
    async createAddress(_, { data }, { auth }) {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return addresses.create(data);
    },
    updateAddress: async (_, { id, data }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const findId = await addresses.findByPk(id);
      const updateAddress = await findId.update(data, { where: { id } });
      return updateAddress;
    },
    deleteAddress: async (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
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
