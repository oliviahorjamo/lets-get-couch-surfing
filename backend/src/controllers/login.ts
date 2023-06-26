import { Request, RequestHandler, Response } from "express";
import { LoginCredentials } from "../types";
import loginMapper from "../utils/mappers/login";
import userMapper from "../utils/mappers/users";
import * as loginDal from "../db/dal/login";

export const login: RequestHandler = (req: Request, res: Response): void => {
  const credentials: LoginCredentials = loginMapper.toLoginCredentials(req.body);
  loginDal
    .login(credentials)
    .then((record) => {
      const userRecord = userMapper.toUserEntry(record);
      return res.json(userRecord);
    })
    .catch((e) => {
      return res.status(500).json(e.message);
    });
};
