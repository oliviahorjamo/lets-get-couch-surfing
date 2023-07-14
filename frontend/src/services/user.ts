import axios from "axios";
import { LoginCredentials, SignUpCredentials } from "../types/user";
import { apiBaseUrl } from "../constants";
import { createErrorMessage }  from '../utils'
import { UserOutputAttributes } from "../types/users";
import { Coordinates } from "../types/coordinates";

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

const updateCoords = async (userId: string, coordinates: Coordinates) => {
  console.log('user id given for service', userId)
  console.log('coordinates given', coordinates)
  try {
    const response = await axios.put(`${apiBaseUrl}/api/updateCoords/:id`, coordinates)
    return response.data
  } catch (error: unknown) {
    throw new Error(createErrorMessage(error))
  }
}

export default {
  login,
  signup,
  updateCoords
};
