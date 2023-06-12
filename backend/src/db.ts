import config from "../config";
import { Sequelize } from "sequelize";
import logger from "./utils/logger";

const sequelize = new Sequelize(config.DATABASE_URL);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection to the database has been established successfully");
  } catch (error: unknown) {
    let errorMessage = "Unable to connect to the database: ";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    logger.error(errorMessage);
  }
  return null;
};

export default {
  connectToDatabase,
  sequelize,
};