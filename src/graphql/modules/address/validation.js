const Joi = require('@hapi/joi');

const schema = Joi.object({
  userId: Joi.number().positive().required(),
  storeCustomerStreet: Joi.string().required(),
  storeCustomerNeighborhood: Joi.string().required(),
  storeCustomerCity: Joi.string().required(),
  storeCustomerState: Joi.string().required(),
  storeCustomerCountry: Joi.string().required(),
  storeCustomerPostalCode: Joi.string().required(),
  storeCustomerNumber: Joi.number().positive().required(),
});

module.exports = schema;
