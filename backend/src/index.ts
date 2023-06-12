import app from "./app";
import http from "http";
import config from "../config";
import logger from "./utils/logger";
import db from "./db";
const { connectToDatabase } = db;

const server = http.createServer(app);

const start = async () => {
  await connectToDatabase();
  server.listen({ port: config.PORT, host: "0.0.0.0" }, () => {
    logger.info(`Server running on port ${config.PORT}`);
  });
};

start();
