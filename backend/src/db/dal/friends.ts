import { FriendRequestAttributes, NewFriendRequest } from "../../types";
import FriendRequest from "../models/friendRequest";

export const addNewRequest = async (
  request: NewFriendRequest
): Promise<FriendRequestAttributes> => {
  try {
    const newRequest = await FriendRequest.create(request);
    return newRequest;
  } catch (error: unknown) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage += "Error: " + error.message;
    }
    throw new Error(errorMessage);
  }
};
