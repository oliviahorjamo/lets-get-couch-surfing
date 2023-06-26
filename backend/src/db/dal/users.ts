import { UserInputAttributes, UserOutputAttributes } from "../../types";
import User from "../models/user";

export const getById = async (id: string): Promise<UserOutputAttributes> => {
  const user = await User.findByPk(id);
  if (!user) {
    // @todo throw custom error
    throw new Error("user not found");
  }
  return user;
};

export const getAll = async (): Promise<UserOutputAttributes[]> => {
  const users = await User.findAll({ where: {} });
  if (!users) {
    throw new Error("users not found");
  }
  return users;
};

export const createNew = async (
  user: UserInputAttributes
): Promise<UserOutputAttributes> => {
  try {
    const userCreated = await User.create(user);
    return userCreated;
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log('error message in create new', errorMessage);
    throw new Error(errorMessage);
  }
};
