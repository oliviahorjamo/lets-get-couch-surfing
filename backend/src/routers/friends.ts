import express from "express";
import { createNewRequest, getAllFriends, getAllReceivedPendingRequests } from "../controllers/friends";

const friendRouter = express.Router();

friendRouter.post("/requests", createNewRequest);

friendRouter.get("/requests/received/pending/:id", getAllReceivedPendingRequests);

friendRouter.get("/:id", getAllFriends);

export default friendRouter;
