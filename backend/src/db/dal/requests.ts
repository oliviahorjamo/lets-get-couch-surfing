import { FriendRequestAttributes, NewFriendRequest } from "../../types";
import FriendRequest from "../models/friendRequest";
import { getErrorMessage } from "../../utils/errorMessages";
//import { UserAttributes } from "../../types";
import { Status } from "../../types";

export const addNewRequest = async (
  request: NewFriendRequest
): Promise<FriendRequestAttributes> => {
  try {
    const newRequest = await FriendRequest.create(request);
    return newRequest;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};

export const acceptRequest = async (requestId: number): Promise<FriendRequestAttributes | undefined> => {
  try {
    const requestToAccept = await FriendRequest.findByPk(requestId);
    const acceptedRequest = requestToAccept?.update({status: Status.Accepted});
    return acceptedRequest;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error));
  }
};