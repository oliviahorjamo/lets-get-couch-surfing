import express from 'express';
import UserValidator from '../validators/users'; 
import Middleware from '../middleware';
import UserController from '../controllers/users';

const userRouter = express.Router();

userRouter.post('/',
  UserValidator.checkCreateUser(),
  Middleware.handleValidationError,
  UserController.createNew
);

userRouter.get('/', 
  UserController.getAll
);

userRouter.get('/:id',
  UserValidator.checkIdParam(),
  Middleware.handleValidationError,
  UserController.getbyId
);



export default userRouter;