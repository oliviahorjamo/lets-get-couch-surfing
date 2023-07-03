import { UserInputAttributes, UserOutputAttributes } from "../../types";
import { getErrorMessage } from "../../utils/errorMessages";
import User from "../models/user";

export const getById = async (id: string): Promise<UserOutputAttributes> => {
  const user = await User.findByPk(id);
  if (!user) {
    // @todo throw custom error
    throw new Error("user not found");
  }
  return user;
};

// tästä ois helppo tehä offline versio joka vaan palauttais kovakoodatut käyttäjät

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

export const getAllUsersWhoHaveRequestedFriendship = async (userId: string): Promise<UserOutputAttributes[]> => {
  try {
    const user = await User.findByPk(userId);
    console.log('getting the requests sent to', user);
    if (user) {
      // NOTE THAT THIS STILL DOESN'T CARE ABOUT THE STATUS OF THE REQUEST
      const senders = await user.getSenders();
      console.log('got the senders', senders);
      const receivers = await user.getReceivers();
      console.log('request sent by this user', receivers);
      return senders;
    }
    throw new Error('Now user found with this id');
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};