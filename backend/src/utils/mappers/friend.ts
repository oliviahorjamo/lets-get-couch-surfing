// Here all information related to mapping data to types
import { Friend, UserOutputAttributes } from "../../types";
import parser from '../parsers';

const toFriendEntry = (object: UserOutputAttributes): Friend => {
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
    const friendEntry = {
      name: parser.parseName(object.name),
      username: parser.parseUserName(object.username),
      id: parser.parseUuid(object.id),
    };
    return friendEntry;
  }
  throw new Error("Incorrect date returned from db: some fields are missing");
};

export default {
  toFriendEntry
};
