// all the configurations

// load the port
// load the environment
// load database url
// if env === test, db_URI = test db url here
// otherwise db url basic db url
// then create a connection

// export the port
// information related to the database doesn't need to be
// exported as you've already created the connection

import * as dotenv from "dotenv";

let path;

switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/.env.production`;
    break;
  case "test":
    path = `${__dirname}/.env.tests`;
    break;
  default:
    path = `${__dirname}/.env.development`;
}

dotenv.config({ path: path });

export default {
  PORT: process.env.PORT || 3001,
  DB_URI: process.env.DB_URI,
};
