// tähän importit config tiedostosta

require("dotenv").config();

//console.log("db password", process.env.DB_NAME);

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.TEST_DATABASE_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
};
