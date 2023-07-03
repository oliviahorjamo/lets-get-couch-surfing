// Here all information related to mapping data to types
import { FriendRequestAttributes, NewFriendRequest } from "../../types";
import parser from "../parsers";

const toNewRequestEntry = (object: unknown): NewFriendRequest => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for new friend request");
  }

  if ("senderId" in object && "receiverId" in object) {
    const newEntry = {
      senderId: parser.parseUuid(object.senderId),
      receiverId: parser.parseUuid(object.receiverId),
    };
    return newEntry;
  }
  throw new Error("Incorrect data for user: some fields are missing");
};

const toFriendRequest = (object: unknown): FriendRequestAttributes => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for friend request");
  }
  if (
    "senderId" in object &&
    "receiverId" in object &&
    "createdAt" in object &&
    "status" in object &&
    "id" in object
  ) {
    const requestEntry = {
      senderId: parser.parseUuid(object.senderId),
      receiverId: parser.parseUuid(object.receiverId),
      createdAt: parser.parseDate(object.createdAt),
      id: parser.parseNumber(object.id),
      status: parser.parseStatus(object.status),
    };
    return requestEntry;
  }
  throw new Error(
    "Incorrect or missing data for request, some fields are missing"
  );
};

/*
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
      updatedAt: parser.parseDate(object.createdAt)
    };
    return userEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};
*/

export default {
  toNewRequestEntry,
  toFriendRequest,
};
