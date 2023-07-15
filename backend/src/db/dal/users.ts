import { UserInputAttributes, UserOutputAttributes, OtherUserAttributes, Friend, Coordinates } from "../../types";
import { getErrorMessage } from "../../utils/errorMessages";
import User from "../models/user";
import mapper from '../../utils/mappers/users';

export const getById = async (id: string): Promise<UserOutputAttributes> => {
  const user = await User.findByPk(id, {
    include: [
      {
      association: 'publications',
      attributes: ['title', 'message', 'createdAt', 'updatedAt']
    }]
  });
  if (!user) {
    // @todo throw custom error
    throw new Error("user not found");
  }
  console.log('user', user);
  return mapper.toUserEntry(user);
};

export const getAll = async (): Promise<OtherUserAttributes[]> => {
  const users = await User.findAll({ where: {} });
  if (!users) {
    throw new Error("users not found");
  }
  // Here map to OtherUserAttributes
  return users;
};

export const createNew = async (
  user: UserInputAttributes
): Promise<UserOutputAttributes> => {
  try {
    const userCreated = await User.create(user);
    const mappedUser = mapper.toUserEntry(userCreated);
    return mappedUser;
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log('error message in create new', errorMessage);
    throw new Error(errorMessage);
  }
};


export const getAllPendingRequests = async (userId: string): Promise<OtherUserAttributes[]> => {
  try {
    const user = await User.findByPk(userId);
    if (user) {
      const senders = await user.getSenders({
        where: {
          '$FriendRequest.status$' : 'pending'
        },
      });
      const mappedSenders = senders.map(s => mapper.toOtherUserEntry(s));
      return mappedSenders;
    }
    throw new Error('Now user found with this id');
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

const getSendersAndReceiversAccepted = async (user: User): Promise<User[]> => {
  const senders = await user.getSenders({where: {
    '$FriendRequest.status$': 'accepted'
    },
    include: [{
      association: 'publications',
      attributes: ['title', 'message', 'createdAt', 'updatedAt']
    }]
  });
  const receivers = await user.getReceivers({where: {
    '$FriendRequest.status$': 'accepted',
  },
    include: [{
      association: 'publications',
      attributes: ['title', 'message', 'createdAt', 'updatedAt']
    }]
  });
  const friends = [...senders, ...receivers];
  return friends;
  
};

export const getAllFriends = async (userId: string): Promise<Friend[]> => {
  try {
    const user = await User.findByPk(userId);
    if (user) {
      const friends = await getSendersAndReceiversAccepted(user);
      return friends.map(f => mapper.toFriendEntry(f));
    }
    throw new Error('No user found with this id');
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};



export const getFriendsOfFriends = async (userId: string): Promise<Friend[]> => {
  // getAllFriends() doesn't work because it returns UserOutputAttributes, not Users per se
  const friends = await getAllFriends(userId);
  const friendsOfFriends = [];
  for (const friend of friends) {
    const friendsOfFriend = await getAllFriends(friend.id);
    friendsOfFriends.push(...friendsOfFriend);
  }
  const friendSet = new Set(friendsOfFriends);
  return [...friendSet];
};

export const updateCoords = async (userId: string, coords: Coordinates): Promise<UserOutputAttributes> => {
  try {
    const user = await User.findByPk(userId);
    console.log('user found in update location', user);
    if (user) {
      console.log('user found in update location', user);
      await user.update({lat: coords.lat, lon: coords.lon});
      console.log('user updated in updatelocation');
      const updatedUser = await getById(userId);
      console.log('updated user', updatedUser);
      return updatedUser;
    }
    throw new Error("no user found with this id");
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};