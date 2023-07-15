// Here all information related to mapping data to types
import { OtherUserAttributes, PublicationAttributes, UserInputAttributes, UserOutputAttributes, Friend, FriendRequestAttributes, Coordinates } from "../../types";
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
    "updatedAt" in object &&
    "lat" in object &&
    "lon" in object
  ) {
    const userEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      password: parser.parsePassword(object.password),
      id: parser.parseUuid(object.id),
      createdAt: parser.parseDate(object.createdAt),
      updatedAt: parser.parseDate(object.createdAt),
      // later create a parser for publications
      publications: "publications" in object ? object.publications as PublicationAttributes[] : [],
      lat: parser.parseCoordinate(object.lat),
      lon: parser.parseCoordinate(object.lon)
    };
    console.log('user returned in mapper', userEntry);
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
    "id" in object &&
    "lat" in object &&
    "lon" in object
  ) {
    const userEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      id: parser.parseUuid(object.id),
      lat: parser.parseCoordinate(object.lat),
      lon: parser.parseCoordinate(object.lon)
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
    "FriendRequest" in object &&
    "lat" in object &&
    "lon" in object
  ) {
    const userEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      id: parser.parseUuid(object.id),
      // later create a parser for publications
      publications: "publications" in object ? object.publications as PublicationAttributes[] : [],
      friendRequest: object.FriendRequest as FriendRequestAttributes,
      lat: parser.parseCoordinate(object.lat),
      lon: parser.parseCoordinate(object.lon)
    };
    return userEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};



const toCoordinates = (object: unknown): Coordinates => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for coordinate");
  }
  if (
    "lat" in object &&
    "lon" in object
  ) {
    const coordinates = {
      lat: parser.parseCoordinate(object.lat),
      lon: parser.parseCoordinate(object.lon)
    };
    return coordinates;
  }
  throw new Error("Incorrect coordinates given");
};


export default {
  toNewUserEntry,
  toUserEntry,
  toOtherUserEntry,
  toFriendEntry,
  toCoordinates
};
