import express from "express";
import { getById, getAll, createNew, updateCoords } from "../controllers/users";

const userRouter = express.Router();

userRouter.post("/", createNew);

userRouter.get("/", getAll);

userRouter.get("/:id", getById);

userRouter.put("/updateCoords/:id", updateCoords);

export default userRouter;
