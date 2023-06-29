import axios from "axios";
import { LoginCredentials, SignUpCredentials } from "../types/login";
import { apiBaseUrl } from "../constants";

const login = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/api/login`, credentials);
    return response.data;
  } catch (error: unknown) {
    console.log("caught an error in login service");
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    throw new Error(errorMessage);
  }
};

const signup = async (credentials: SignUpCredentials) => {
  console.log("signign up", credentials);
  const response = await axios.post(`${apiBaseUrl}/api/users`, credentials);
  return response.data;
};

export default {
  login,
  signup,
};
