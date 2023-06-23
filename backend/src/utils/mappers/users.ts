// Here all information related to mapping data to types
import { UserInputAttributes, UserOutputAttributes } from "../../db/models/user";
import { isString, isUuidString, isDate } from ".";

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
      name: parseName(object.name),
      username: parseUserName(object.username),
      password: parsePassword(object.password),
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
      name: parseName(object.name),
      username: parseUserName(object.username),
      password: parsePassword(object.password),
      id: parseUuid(object.id),
      createdAt: parseDate(object.createdAt),
      updatedAt: parseDate(object.createdAt)
    };
    return userEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};

const parseDate = (date: unknown): Date => {
  if (!date || !isDate(date)) {
    throw new Error('Incorrect or missing date');
  }
  return date;
};

const parseUserName = (username: unknown): string => {
  if (!username || !isString(username)) {
    throw new Error("Incorrct or missing username");
  }
  return username;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }
  return name;
};

const parsePassword = (password: unknown): string => {
  if (!password || !isString(password)) {
    throw new Error("Incorrect or missing password");
  }
  return password;
};

export const parseUuid = (id: unknown): string => {
  if (!id || !isString(id) || !isUuidString(id)) {
    throw new Error("id given not uuid v4");
  }
  return id;
};

export default {
  toNewUserEntry,
  toUserEntry
};
