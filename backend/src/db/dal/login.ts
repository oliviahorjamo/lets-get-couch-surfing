import User, { UserOutputAttributes } from "../models/user";
import { LoginCredentials } from "../../types";

export const login = async (
  credentials: LoginCredentials
): Promise<UserOutputAttributes | null> => {
  console.log(credentials);
  const user = await User.findOne({
    where: { username: credentials.username },
  });
  console.log("user found", user);
  return user;
  /*
  const user = await User.findByPk(id);
  if (!user) {
    // @todo throw custom error
    throw new Error("user not found");
  }
  return user;
  */
};
