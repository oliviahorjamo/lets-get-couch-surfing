import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import db from '../models';

class UserController {
  async getbyId(req: Request, res: Response) {
    try {
      console.log('reading by id');
      const { id } = req.params;
      // the await goes wrong somewhere as the console log is not logged
      const record = await db.User.findOne({ where: { id } });
      console.log('record given', record);
      return res.json(record);
    } catch (e) {
      return res.json(e);
    }
  }
}

export default new UserController();