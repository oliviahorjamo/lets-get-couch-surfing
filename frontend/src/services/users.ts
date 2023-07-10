import axios from "axios";

import { apiBaseUrl } from "../constants";
import { OtherUserAttributes } from "../types/users";

const getAll = async (): Promise<OtherUserAttributes[]> => {
  const response = await axios.get(`${apiBaseUrl}/api/users`);
  return response.data;
};


export default {
  getAll,
};

export {};
