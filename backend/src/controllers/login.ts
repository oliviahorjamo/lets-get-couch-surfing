import { Request, RequestHandler, Response } from "express";
import { LoginCredentials } from "../types";
import mapper from "../utils/mappers/users";
import * as loginDal from "../db/dal/login";

export const login: RequestHandler = (req: Request, res: Response): void => {
  console.log("in login controller");
  // parse loginCredentials
  const credentials: LoginCredentials = req.body;
  loginDal
    .login(credentials)
    .then((record) => {
      return res.json(record);
    })
    .catch((e) => {
      return res.status(404).json(e);
    });
};
