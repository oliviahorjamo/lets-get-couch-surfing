//import * as dotenv from "dotenv";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
require("dotenv").config();

let DB_USER;
let DB_PASSWORD;
let DB_NAME;

// tänne itse muuttujien importtaaminen eikä vaan filejen
// tän jälkeen tarviit vaan yhden .env filen minkä pitäis helpottaa
// ci/cd salaisuuksien asettamista + tälleen tehään esimerkissä

switch (process.env.NODE_ENV) {
  case "production":
    DB_USER = process.env.PROD_DATABASE_USER;
    DB_PASSWORD = process.env.PROD_DATABASE_PASSWORD;
    DB_NAME = process.env.PROD_DATABASE_NAME;
    break;
  case "test":
    DB_USER = process.env.TEST_DATABASE_USER;
    DB_PASSWORD = process.env.TEST_DATABASE_PASSWORD;
    DB_NAME = process.env.TEST_DATABASE_NAME;
    break;
  default:
    DB_USER = process.env.DATABASE_USER;
    DB_PASSWORD = process.env.DATABASE_PASSWORD;
    DB_NAME = process.env.DATABASE_NAME;
}

//console.log("db url", DB_URL);

//dotenv.config({ path: path });

export default {
  PORT: process.env.PORT || 3001,
  //DATABASE_URL: DB_URL as string,
  DB_USER: DB_USER,
  DB_PASSWORD: DB_PASSWORD,
  DB_NAME: DB_NAME,
};
