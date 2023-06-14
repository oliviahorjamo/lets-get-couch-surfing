import app from "./app";
import http from 'http';
import db from './models';
import logger from "./utils/logger";
import { users } from './seeders/users';
import { publications } from './seeders/publications';

const port = process.env.PORT || 3001;

const server = http.createServer(app);


db.sequelize.sync({alter: true}).then(() => {
  server.listen({ port: port}, () => {
    logger.info(`Server running on port ${port}`);
  });
});


const createUsers = () => {
  users.map(user => {
    db.User.findOrCreate({
      where: {
        username: user.username
      }
    });
  });
};

const createPublications = () => {
  publications.map(publication => {
    db.Publication.create(publication);
  });
};


createUsers();
createPublications();