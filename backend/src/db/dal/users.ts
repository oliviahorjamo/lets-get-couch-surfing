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

export const getAllPendingRequests = async (userId: string): Promise<UserOutputAttributes[]> => {
  try {
    const user = await User.findByPk(userId);
    console.log('getting the requests sent to', user);
    if (user) {
      const senders = await user.getSenders({
        where: {
          '$FriendRequest.status$' : 'pending'
        }
      });
      return senders;
    }
    throw new Error('Now user found with this id');
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};


export const getAllFriends = async (userId: string): Promise<UserInputAttributes[]> => {
  try {
    const user = await User.findByPk(userId);
    console.log('user found', user);
    if (user) {
      // the two queries are needed because there is no connection between
      // FriendRequests and Users with both primary keys
      const senders = await user.getSenders({where: {
        '$FriendRequest.status$': 'accepted'
        }
      });
      const receivers = await user.getReceivers({where: {
        '$FriendRequest.status$': 'accepted'
      }});const friends = [...senders, ...receivers];
      console.log('friends', friends);
      return friends;
    }
    throw new Error('No user found with this id');
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};