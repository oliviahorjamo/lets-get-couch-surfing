import axios from "axios";
import { LoginCredentials, SignUpCredentials } from "../types/login";
import { apiBaseUrl } from "../constants";

const login = async (credentials: LoginCredentials) => {
  console.log('loggin in', credentials)
  const response = await axios.post(`${apiBaseUrl}/api/login`, credentials);
  return response.data;
};

const signup = async (credentials: SignUpCredentials) => {
  console.log('signign up', credentials)
  const response = await axios.post(`${apiBaseUrl}/api/users`, credentials)
  return response.data
}

export default {
  login,
  signup
};