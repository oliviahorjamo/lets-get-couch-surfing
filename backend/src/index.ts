import app from "./app";
import http from 'http';
import db from './models';
import logger from "./utils/logger";

const port = process.env.PORT || 3001;

const server = http.createServer(app);

db.sequelize.sync().then(() => {
  server.listen({ port: port}, () => {
    logger.info(`Server running on port ${port}`);
  });
});

// sync the models here

/*
import http from "http";
//import config from "./config/config.js";
import logger from "./utils/logger";

import db from "./db";
const { connectToDatabase } = db;

const server = http.createServer(app);

const start = async () => {
  await connectToDatabase();
  server.listen({ port: process.env.PORT, host: "0.0.0.0" }, () => {
    logger.info(`Server running on port ${process.env.PORT}`);
  });
};

start();
*/