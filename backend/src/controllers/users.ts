import { Request, Response } from "express";
//import { v4 as uuidv4 } from 'uuid';
import User from "../db/models/user";

class UserController {
  async getbyId(req: Request, res: Response) {
    try {
      console.log('reading by id');
      const { id } = req.params;
      const record = await User.findOne({ where: { id } });
      console.log('record given', record);
      return res.json(record);
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new UserController();