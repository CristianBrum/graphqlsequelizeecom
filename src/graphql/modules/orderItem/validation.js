const Joi = require('joi');

const schema = Joi.object({
  quantity: Joi.number().positive().required(),
  productId: Joi.number().positive().required(),
  orderId: Joi.number().positive().required(),
});

module.exports = schema;
