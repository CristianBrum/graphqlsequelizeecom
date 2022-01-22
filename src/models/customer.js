'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customers', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    storeCustomerName: DataTypes.STRING,
    storeCustomerLastName: DataTypes.STRING,
    storeCustomerEmail: DataTypes.STRING,
    storeCustomerDocumentNumber: DataTypes.STRING,
    storeCustomerBirthDate: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false, tableName: 'customers' });

  Customer.associate = (models) => {
    Customer.hasMany(models.addresses, {
      foreignKey: 'userId',
      as: 'addresses',
    });
    Customer.hasMany(models.orders, {
      foreignKey: 'userId',
      as: 'orders',
    });
  };
  return Customer;
};
