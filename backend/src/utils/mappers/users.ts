// Here all information related to mapping data to types
import { OtherUserAttributes, PublicationAttributes, UserInputAttributes, UserOutputAttributes, Friend, FriendRequestAttributes } from "../../types";
import parser from '../parsers';

const toNewUserEntry = (object: unknown): UserInputAttributes => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for user");
  }

  if (
    "name" in object &&
    "username" in object &&
    "password" in object
  ) {
    const newEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      password: parser.parsePassword(object.password),
    };
    return newEntry;
  }
  throw new Error("Incorrect data for user: some fields are missing");
};

const toUserEntry = (object: unknown): UserOutputAttributes => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for user");
  }

  if (
    "name" in object &&
    "username" in object &&
    "password" in object &&
    "id" in object &&
    "createdAt" in object &&
    "updatedAt" in object 
  ) {
    const userEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      password: parser.parsePassword(object.password),
      id: parser.parseUuid(object.id),
      createdAt: parser.parseDate(object.createdAt),
      updatedAt: parser.parseDate(object.createdAt),
      // later create a parser for publications
      publications: "publications" in object ? object.publications as PublicationAttributes[] : []
    };
    return userEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};

const toOtherUserEntry = (object: unknown): OtherUserAttributes => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for user");
  }

  if (
    "name" in object &&
    "username" in object &&
    "id" in object
  ) {
    const userEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      id: parser.parseUuid(object.id),
    };
    return userEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};

const toFriendEntry = (object: unknown): Friend => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for user");
  }

  if (
    "name" in object &&
    "username" in object &&
    "id" in object &&
    "FriendRequest" in object
  ) {
    const userEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      id: parser.parseUuid(object.id),
      // later create a parser for publications
      publications: "publications" in object ? object.publications as PublicationAttributes[] : [],
      friendRequest: object.FriendRequest as FriendRequestAttributes
    };
    return userEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};

export default {
  toNewUserEntry,
  toUserEntry,
  toOtherUserEntry,
  toFriendEntry
};
