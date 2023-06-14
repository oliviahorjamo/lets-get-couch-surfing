import { body, param } from 'express-validator';

class UserValidator {
  checkCreateUser() {
    return [
      body('username')
        .notEmpty()
        .withMessage('the username should not be empty')
        .isLength({max: 100}),
      body('name')
        .notEmpty()
        .withMessage('the name should not be empty')
        .isLength({max: 100}),
      body('password')
        .notEmpty()
        .withMessage('the password should not be empty')
        .isLength({max: 100}),
    ];
  }
  checkIdParam() {
    return [
      param("id")
        .notEmpty()
        .withMessage('Parameter should not be empty')
        .isUUID(4)
        .withMessage('Value should be UUIDV4')
    ];
  }
}

export default new UserValidator();