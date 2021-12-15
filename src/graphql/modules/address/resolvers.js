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
    async createAddress(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new Error('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }
      return addresses.create(data);
    },
  },
  Address: {
    async userId(address) {
      return address.getCustomers();
    },
  },
};

module.exports = resolvers;
