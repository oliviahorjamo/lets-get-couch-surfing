import axios from "axios";
import { LoginCredentials, SignUpCredentials } from "../types/login";
import { apiBaseUrl } from "../constants";
import { createErrorMessage }  from '../utils'
import { UserOutputAttributes } from "../types/users";

const login = async (credentials: LoginCredentials): Promise<UserOutputAttributes> => {
  try {
    const response = await axios.post(`${apiBaseUrl}/api/login`, credentials);
    return response.data;
  } catch (error: unknown) {
    throw new Error(createErrorMessage(error));
  }
};

const signup = async (credentials: SignUpCredentials): Promise<UserOutputAttributes> => {
  try {
    const response = await axios.post(`${apiBaseUrl}/api/users`, credentials);
    return response.data;
  } catch (error: unknown) {
    throw new Error(createErrorMessage(error))
  }
};

export default {
  login,
  signup,
};
