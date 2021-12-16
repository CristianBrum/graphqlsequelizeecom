'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'customers',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      storeCustomerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerLastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerDocumentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerBirthDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      tableName: 'customers',
    },
  );

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
