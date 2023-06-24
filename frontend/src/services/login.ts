import axios from "axios";
import { Credentials } from "../types/login";
import { apiBaseUrl } from "../constants";

const login = async (credentials: Credentials) => {
  const response = await axios.post(`${apiBaseUrl}/api/login`, credentials);
  return response.data;
};

export default {
  login,
};