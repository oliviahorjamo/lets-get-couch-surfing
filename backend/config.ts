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
  DATABASE_URL: process.env.DATABASE_URL as string,
};
