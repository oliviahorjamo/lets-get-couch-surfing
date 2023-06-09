import User from "../models/user";
import { LoginCredentials } from "../../types";
import { UserOutputAttributes } from "../../types";
import mapper from "../../utils/mappers/users";

const passwordCorrect = (correctPassword: string, passwordGiven: string): boolean => {
  return passwordGiven === correctPassword;
};

export const login = async (
  credentials: LoginCredentials
): Promise<UserOutputAttributes | null> => {
  const user = await User.findOne({
    where: { username: credentials.username },
  });
  if (!user) {
    throw new Error("User not found with the given username");
  } else {
    if (passwordCorrect(user.password, credentials.password)) {
      return mapper.toUserEntry(user);
    } else {
      throw new Error("Incorrect password");
    }
  }
};
