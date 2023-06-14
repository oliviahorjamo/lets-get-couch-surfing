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
