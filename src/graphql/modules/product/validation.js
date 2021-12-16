const { UserInputError } = require('apollo-server');
const Joi = require('@hapi/joi');

const schema = Joi.object({
  productName: Joi.string().required(),
  firstPictureUrl: Joi.string().required(),
  variationDescription: Joi.string().required(),
  productWeight: Joi.number().positive().required(),
  unitPrice: Joi.number().positive().required(),
  stockQuantity: Joi.number().positive().required(),
});

module.exports = schema;
