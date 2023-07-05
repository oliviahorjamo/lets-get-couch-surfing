import { UserInputAttributes, UserOutputAttributes } from "../../types";
import { getErrorMessage } from "../../utils/errorMessages";
import User from "../models/user";
import sequelizeConnection from "../config";
import { QueryTypes } from "sequelize";
import mapper from '../../utils/mappers/users';

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

const getSendersAndReceiversAccepted = async (user: User): Promise<UserOutputAttributes[]> => {
  const senders = await user.getSenders({where: {
    '$FriendRequest.status$': 'accepted'
    },
    include: ['publications']
  });
  const receivers = await user.getReceivers({where: {
    '$FriendRequest.status$': 'accepted',
  },
    include: ['publications']
  });
  const friends = [...senders, ...receivers];
  return friends;
  
};

export const getAllFriends = async (userId: string): Promise<UserOutputAttributes[]> => {
  try {
    const user = await User.findByPk(userId);
    if (user) {
      const friends = await getSendersAndReceiversAccepted(user);
      return friends;
    }
    throw new Error('No user found with this id');
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

export const getEntireNetwork = async (userId: string, depth: number): Promise<UserOutputAttributes[]> => {
  // This query currently works, the next step is to find all friends of friends hierarchically
  // Note that currently you return the friend requests, not the users as expected
  const query = `
    SELECT
      *
    FROM
      "FriendRequests"
    WHERE
      "receiverId" = ?
    OR
      "senderId" = ?
  `;
  const friends = await sequelizeConnection.query(query, { type: QueryTypes.SELECT, replacements: [userId, userId] });
  console.log('friends returned', friends);
  const mappedFriends = friends.map(f => mapper.toUserEntry(f));
  return mappedFriends;
};

// The hierarchical query needed