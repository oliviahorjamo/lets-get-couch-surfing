// here all code related to finding publications

// later the userextractor stuff here

import express from "express";

const publicationRouter = express.Router();

publicationRouter.get("/", async (_req, res) => {
  // later here finding the publications from the database etc.
  res.send("Publication routerin get method toimii");
});

export default publicationRouter;
