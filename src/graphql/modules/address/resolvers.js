const { addresses } = require('../../../models');

const resolvers = {
  Query: {
    address: (_, { id }) =>
      addresses.findByPk(id, (error, allAddress) => {
        if (error) console.log('error', error);
        return allAddress;
      }),
    allAddress: () =>
      addresses.findAll({}, (error, allAddress) => {
        if (error) console.log('error', error);
        return allAddress;
      }),
  },
  Mutation: {
    async createAddress(_, { data }) {
      return addresses.create(data);
    },
  },
  Address: {
    async customer(address) {
      return address.getCustomers();
    },
  },
};

module.exports = resolvers;
