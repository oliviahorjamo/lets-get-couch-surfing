// here all accesses to the database

import User from "../db/models/user";
import { UserAttributes } from "../types/user";

export const getEntries = async (): Promise<UserAttributes[] | Error> => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Failed to get users");
  }
};
