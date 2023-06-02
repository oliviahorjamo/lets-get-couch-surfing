// later the userextractor stuff here

import express from "express";
const { User } = require("../models");

const userRouter = express.Router();

userRouter.get("/", async (_req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export default userRouter;
