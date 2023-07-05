import { RequestHandler, Request, Response } from "express";
import requestMapper from "../utils/mappers/friendRequests";
import * as friendRequestDal from "../db/dal/requests";
import * as userDal from "../db/dal/users";

export const createNewRequest: RequestHandler = (
  req: Request,
  res: Response
) => {
  const friendRequestToCreate = requestMapper.toNewRequestEntry(req.body);
  friendRequestDal
    .addNewRequest(friendRequestToCreate)
    .then((record) => {
      return res.status(201).json(record);
    })
    .catch((e: Error) => {
      return res.status(500).json(e.message);
    });
};

export const getAllReceivedPendingRequests: RequestHandler = (req: Request, res: Response) => {
  const userId = req.params.id;
  console.log('getting the pending requests sent to', userId);
  userDal.getAllPendingRequests(userId)
    .then(records => {
      return res.status(200).json(records);
    })
    .catch((e: Error) => {
      return res.status(500).json(e.message);
    });
};

export const getAllFriends: RequestHandler = (req: Request, res: Response) => {
  const userId = req.params.id;
  console.log('getting all friends of', userId);
  userDal.getAllFriends(userId)
    .then(records => {
      return res.status(200).json(records);
    })
    .catch((e: Error) => {
      return res.status(500).json(e.message);
    });
};

export const acceptRequest: RequestHandler = (req: Request, res: Response) => {
  const requestId = Number(req.params.id);
  friendRequestDal
    .acceptRequest(requestId)
    .then((record) => {
      return res.status(201).json(record);
    })
    .catch((e: Error) => {
      return res.status(500).json(e.message);
    });
};

export const getEntireNetwork: RequestHandler = (req: Request, res: Response) => {
  const userId = req.params.id;
  console.log('getting the entire network of', userId);
  userDal.getEntireNetwork(userId, 1)
    .then(records => {
      return res.status(200).json(records);
    })
    .catch((e: Error) => {
      return res.status(500).json(e.message);
    });
};