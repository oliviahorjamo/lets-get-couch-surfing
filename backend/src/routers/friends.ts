import express from "express";
import { createNewRequest } from "../controllers/friends";

const friendRouter = express.Router();

friendRouter.post("/requests", createNewRequest);

export default friendRouter;
