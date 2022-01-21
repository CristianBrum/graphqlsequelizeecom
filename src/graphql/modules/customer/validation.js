const Joi = require('joi').extend(require('@joi/date'));

const schema = Joi.object({
  storeCustomerName: Joi.string().alphanum().min(3).max(30).required(),
  storeCustomerLastName: Joi.string().alphanum().min(3).max(30).required(),
  storeCustomerEmail: Joi.string().email().required(),
  storeCustomerDocumentNumber: Joi.string()
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
    .required(),
  storeCustomerBirthDate: Joi.date().format('DD/MM/YYYY').utc().required(),
  username: Joi.string().alphanum().min(3).max(12).required(),
  password: Joi.string().alphanum().min(6).max(15).required(),
});

module.exports = schema;
