'use strict';

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('addresses', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    storeCustomerStreet: DataTypes.STRING,
    storeCustomerNeighborhood: DataTypes.STRING,
    storeCustomerCity: DataTypes.STRING,
    storeCustomerState: DataTypes.STRING,
    storeCustomerCountry: DataTypes.STRING,
    storeCustomerPostalCode: DataTypes.STRING,
    storeCustomerNumber: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'addresses' });

  Address.associate = (models) => {
    Address.belongsTo(models.customers, {
      foreignKey: 'userId',
      as: 'customers',
    });
  };

  return Address;
};
