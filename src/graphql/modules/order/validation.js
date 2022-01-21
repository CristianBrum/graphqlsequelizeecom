const Joi = require('joi');

const schema = Joi.object({
  installments: Joi.number().positive().max(12).required(),
  status: Joi.number().min(0).max(2).required(),
  userId: Joi.number().required(),
  addressId: Joi.number().required(),
});

module.exports = schema;
