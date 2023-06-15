// tähän importit config tiedostosta

require("dotenv").config();

//console.log("db password", process.env.DB_NAME);

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    /*
    url: "postgresql://postgres:secret@localhost:5432/postgres",
    dialect: "postgres"
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
    */
  },
  test: {
    use_env_variable: "TEST_DATABASE_URL"
    /*
    username: process.env.TEST_DATABASE_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
    */
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
};
