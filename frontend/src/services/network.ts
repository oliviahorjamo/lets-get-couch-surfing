import axios from "axios";
import { Friend } from "../types/users";
import { apiBaseUrl } from "../constants";

const getFriends = async (userId: string): Promise<Friend[]> => {
  const response = await axios.get(`${apiBaseUrl}/api/friends/${userId}`);
  return response.data;
};


export default {
  getFriends,
};

