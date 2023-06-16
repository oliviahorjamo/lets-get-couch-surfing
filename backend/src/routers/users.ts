import express from 'express';
import UserValidator from '../validators/users'; 
import handleValidationError from '../middleware';
//import UserController from '../controllers/users';
import {
  getById,
  getAll,
  createNew
} from '../controllers/users';

const userRouter = express.Router();

userRouter.post('/',
  UserValidator.checkCreateUser(),
  handleValidationError,
  createNew
);

userRouter.get('/', 
  getAll
);

userRouter.get('/:id',
  UserValidator.checkIdParam(),
  handleValidationError,
  getById
);



export default userRouter;