import express, { Request, Response } from 'express';
//import userService from '../services/userService'
import UserValidator from '../validators/users'; 
import { v4 as uuidv4 } from 'uuid';
import db from '../models';
import Middleware from '../middleware';
import UserController from '../controllers/users';

const userRouter = express.Router();

// TODO
// Type the functions correctly so that you know what they return
// Set the middleware validation error handle in app.use()
//  so that you don't have to write it everywhere

userRouter.post('/',
  UserValidator.checkCreateUser(),
  Middleware.handleValidationError,
  async (req: Request, res: Response) => {
    const id = uuidv4();
    try {
      const userToCreate = {...req.body, id};
      const record = await db.User.create(userToCreate);
      return res.json({record});
    } catch (e) {
      return res.json(e);
    }
  }
);

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const records = await db.User.findAll({ where: {}});
    return res.json(records);
  } catch (e) {
    return res.json(e);
  }
});

userRouter.get('/:id',
  UserValidator.checkIdParam(),
  Middleware.handleValidationError,
  UserController.getbyId
);



export default userRouter;