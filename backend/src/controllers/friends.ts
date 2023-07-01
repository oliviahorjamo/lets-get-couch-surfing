import { RequestHandler, Request, Response } from "express";
import requestMapper from "../utils/mappers/friendRequests";

export const createNewRequest: RequestHandler = (
  req: Request,
  res: Response
) => {
  const friendRequest = requestMapper.toNewRequestEntry(req.body);
  console.log("friend request given", friendRequest);
  res.send(friendRequest);
};
