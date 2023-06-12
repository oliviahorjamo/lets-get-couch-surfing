// later the userextractor stuff here

import express from "express";
import User from "../models/user";

const userRouter = express.Router();

userRouter.get("/", async (_req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export default userRouter;
