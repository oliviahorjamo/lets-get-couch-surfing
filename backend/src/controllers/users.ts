import { Request, RequestHandler, Response } from "express";
import { UserInputAttributes } from "../db/models/user";
import mapper from "../utils/mappers/users";
import { parseUuid } from "../utils/mappers/users";
import * as userDal from "../db/dal/users";

export const getById: RequestHandler = (req: Request, res: Response): void => {
  const id = parseUuid(req.params.id);
  userDal
    .getById(id)
    .then((record) => {
      return res.json(record);
    })
    .catch((e) => {
      return res.status(404).json(e);
    });
};

export const createNew: RequestHandler = (
  req: Request,
  res: Response
): void => {
  const userToCreate: UserInputAttributes = mapper.toNewUserEntry(req.body);
  userDal
    .createNew(userToCreate)
    .then((record) => {
      return res.status(201).json(record);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const getAll: RequestHandler = (_req: Request, res: Response): void => {
  userDal
    .getAll()
    .then((records) => {
      return res.json(records);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
