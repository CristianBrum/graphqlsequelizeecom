require('dotenv').config();

module.exports = {
  development: {
    // dialect: 'sqlite',
    // storage: './database.sqlite',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_DATABSE,
    host: process.env.HOSTNAME,
    dialect: 'sqlite',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_DATABSE,
    host: process.env.HOSTNAME,
    dialect: process.env.DB_DIALECT,
  },
};
