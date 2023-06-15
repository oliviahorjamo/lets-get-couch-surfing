import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import User from "../db/models/user";

class UserController {
  async getbyId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await User.findOne({ where: { id } });
      return res.json(record);
    } catch (e) {
      return res.json(e);
    }
  }

  async createNew(req: Request, res: Response) {
    const id = uuidv4();
    try {
      const userToCreate = {...req.body, id};
      const record = await User.create(userToCreate);
      return res.json({record});
    } catch (e) {
      return res.json(e);
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const records = await User.findAll({ where: {}});
      return res.json(records);
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new UserController();