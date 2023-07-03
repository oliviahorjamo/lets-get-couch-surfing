import express from "express";
import { createNewRequest, getAllReceivedPendingRequests } from "../controllers/friends";

const friendRouter = express.Router();

friendRouter.post("/requests", createNewRequest);

friendRouter.get("/requests/received/pending/:id", getAllReceivedPendingRequests);

export default friendRouter;
