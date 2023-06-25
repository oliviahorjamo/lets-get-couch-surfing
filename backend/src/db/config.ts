import { Sequelize } from "sequelize";

import config from "../config";

const dbDriver = config.DIALECT;
const DB_URL = config.DB_URL;

console.log("connecting to", DB_URL);

const sequelizeConnection = new Sequelize(DB_URL, {
  dialect: dbDriver,
  logging: false,
});

export default sequelizeConnection;
