import sequelizeConnection from "./config";
import User from "./models/user";
import Publication from "./models/publication";
import logger from "../utils/logger";
import { users } from "../seeders/users";
import { publications } from "../seeders/publications";
import userMapper from "../utils/mappers/users";
import { NewFriendRequest, UserInputAttributes } from "../types";
import FriendRequest from "./models/friendRequest";

const initDb = async (): Promise<void> => {
  try {
    await syncTables();
    await createUsers();
    await createPublications();
    await createFriendRequests();
  } catch (error) {
    throw new Error("something went wrong with initializing db");
  }
};

const syncTables = async () => {
  try {
    console.log("syncing tables");
    await sequelizeConnection.sync({ alter: true });
  } catch (error) {
    logger.error("something went wrong with syncing the db");
  }
};

const createUsers = async () => {
  try {
    for (const user of users) {
      const newUser: UserInputAttributes = userMapper.toNewUserEntry(user);
      await User.findOrCreate({
        where: {
          username: newUser.username,
        },
        defaults: {
          name: newUser.name,
          password: newUser.password,
          username: newUser.username,
        },
      });
      logger.info("created initial users");
    }
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    logger.error("something went wrong with creating users");
  }
};

const createOneRequest = async (request: NewFriendRequest) => {
  try {
    console.log("creating request");
    await FriendRequest.create(request);
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    logger.error("something went wrong with creating one friend request");
  }
};

const createRequestObjectsForExistingUsers = async () => {
  const usersInDb = await User.findAll();
  if (usersInDb.length > 1) {
    const requests = [
      {
        senderId: usersInDb[0].id,
        receiverId: usersInDb[1].id,
      },
    ];
    return requests;
  }
  return null;
};

const createFriendRequests = async () => {
  try {
    const requests = await createRequestObjectsForExistingUsers();
    if (requests) {
      for (const request of requests) {
        await createOneRequest(request);
      }
    }
  } catch (error) {
    logger.error("something went wrong with creating all friend requests");
  }
};

const createPublications = async () => {
  try {
    await Promise.all(
      publications.map(async (publication) => {
        await Publication.create(publication);
      })
    );
    logger.info("created initial publications");
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
    }
    logger.error("something went wrong with creating publications");
  }
};

export default initDb;
