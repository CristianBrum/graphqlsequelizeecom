const { UserInputError } = require('apollo-server');
const { customers } = require('../../../models');
const schema = require('./validation');
const {
  encryptPassword,
  decryptPassword,
  createToken,
} = require('../../../middlewares/auth');

const resolvers = {
  Query: {
    customer: (_, { id }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return customers.findByPk(id);
    },
    allCustomer: ({ auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      return customers.findAll();
    },
  },
  Mutation: {
    async createCustomer(_, { data }) {
      const { _value, error } = schema.validate(data, { abortEarly: false });
      if (error) {
        throw new UserInputError('Preencha todos os campos corretamente', {
          validationErrors: error.details,
        });
      }

      const customer = await customers.create({
        storeCustomerName: data.storeCustomerName,
        storeCustomerLastName: data.storeCustomerLastName,
        storeCustomerEmail: data.storeCustomerEmail,
        storeCustomerDocumentNumber: data.storeCustomerDocumentNumber,
        storeCustomerBirthDate: data.storeCustomerBirthDate,
        username: data.username,
        password: await encryptPassword(data.password),
      });
      const token = createToken({
        id: customer.id,
        username: customer.username,
      });
      return { token, customer };
    },
    updateCustomer: async (_, { id, data }, { auth }) => {
      if (!auth) throw new Error('Você não tem autorização para essa ação!');
      const findId = await customers.findByPk(id);
      const updateCustomer = await findId.update(data, { where: { id } });
      return updateCustomer;
    },
    login: async (_, { username, password }) => {
      try {
        const customer = await customers.findOne({ where: { username } });
        if (!customer) {
          throw new Error('Usuário ou senha incorretos');
        }
        const invalidPassword = await decryptPassword(
          password,
          customer.password,
        );
        if (!invalidPassword) {
          throw new Error('Usuário ou senha incorretos');
        }

        const token = createToken({
          id: customer.id,
          username: customer.username,
        });

        return { token, customer };
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
  Customer: {
    async address(cust) {
      return cust.getAddresses();
    },
  },
};

module.exports = resolvers;
