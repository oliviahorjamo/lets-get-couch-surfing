//import config from "../config";
import express from "express";
import cors from "cors";
import publicationRouter from "./routes/publications";
// import middleware here
// import mongoose here

//const logger = require('./utils/logger')

import connect from "./db";
connect();

const app = express();

// connect to mongoose here

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/publications", publicationRouter);

export default app;
