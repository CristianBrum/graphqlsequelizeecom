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
    customer: (_, { id }) => {
      return customers.findByPk(id);
    },
    allCustomer: (_, args) => {
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
        password: await encryptPassword(data.password),
      });
      const token = createToken({
        id: customer.id,
        storeCustomerEmail: customer.storeCustomerEmail,
      });
      return { token, customer };
    },
    updateCustomer: async (_, { id, data }) => {
      const findId = await customers.findByPk(id);
      const updateCustomer = await findId.update(data, { where: { id } });
      return updateCustomer;
    },
    login: async (_, { storeCustomerEmail, password }) => {
      try {
        const customer = await customers.findOne({ where: { storeCustomerEmail } });
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
          storeCustomerEmail: customer.storeCustomerEmail,
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
    async order(customer) {
      return customer.getOrders();
    },
  },
};

module.exports = resolvers;
