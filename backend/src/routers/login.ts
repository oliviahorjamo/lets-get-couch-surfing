import express from "express";
import { login } from "../controllers/login";

const loginRouter = express.Router();

loginRouter.post("/", login);

export default loginRouter;
