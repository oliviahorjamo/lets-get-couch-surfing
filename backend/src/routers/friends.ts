import express from "express";
import { acceptRequest, createNewRequest, getAllFriends, getAllReceivedPendingRequests, getEntireNetwork } from "../controllers/friends";

const friendRouter = express.Router();

friendRouter.post("/requests", createNewRequest);

friendRouter.get("/requests/received/pending/:id", getAllReceivedPendingRequests);

friendRouter.get("/:id", getAllFriends);

friendRouter.put("/requests/:id", acceptRequest);

friendRouter.get("/network/:id", getEntireNetwork);

export default friendRouter;
