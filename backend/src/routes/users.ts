import express from "express";
import { getEntries } from "../services/userService";

const userRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.get("/", async (_req, res) => {
  try {
    const users = await getEntries();
    res.status(200).send(users);
  } catch (error: unknown) {
    let errorMessage = "An error in getting user entries: ";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    res.status(500).send(errorMessage);
  }
});

export default userRouter;
