import { Request, RequestHandler, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import User from "../db/models/user";
import { UserAttributes } from "../db/models/user";
import toNewUserEntry from "../utils/mappers/users";

export const getById: RequestHandler = (req: Request, res: Response): void => {
  const { id } = req.params;
  User.findOne({ where: { id } })
    .then((record) => {
      return res.json(record);
    })
    .catch((e) => {
      return res.json(e);
    });
};

export const createNew: RequestHandler = (req: Request, res: Response): void => {
  const id = uuidv4();
  const attributesGiven = toNewUserEntry(req.body);
  const userToCreate: UserAttributes = {...attributesGiven, id};
  User.create(userToCreate)
    .then((record) => {
      return res.json(record);
    })
    .catch((e) => {
      return res.json(e);
    });
};

export const getAll: RequestHandler = (_req: Request, res: Response): void => {
  User.findAll({ where: {}})
    .then((records) => {
      return res.json(records);
    })
    .catch((e) => {
      return res.json(e);
    });
};