// Here all information related to mapping data to types
import { LoginCredentials } from "../../types/";
import parser from "../parsers";

const toLoginCredentials = (object: unknown): LoginCredentials => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data for user");
  }

  if (
    "username" in object &&
    "password" in object
  ) {
    const loginCredentials = {
      username: parser.parseUserName(object.username),
      password: parser.parsePassword(object.password)
    };
    return loginCredentials;
  }
  throw new Error("Incorrect credentials given");
};


export default {
  toLoginCredentials
};
