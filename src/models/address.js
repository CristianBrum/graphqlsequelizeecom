'use strict';

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'addresses',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      storeCustomerStreet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerNeighborhood: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerCountry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerPostalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      storeCustomerNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'updated_at',
      },
    },
    {
      tableName: 'addresses',
    },
  );

  Address.associate = (models) => {
    Address.belongsTo(models.Customer, {
      foreignKey: 'userId',
    });
  };

  return Address;
};
