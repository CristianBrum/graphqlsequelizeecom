const Joi = require('@hapi/joi');

const schema = Joi.object({
  quantity: Joi.number().required(),
  productId: Joi.number().required(),
  orderId: Joi.number().required(),
});

module.exports = schema;
