import FriendRequest from "../src/db/models/friendRequest";
import { FriendRequestAttributes, NewFriendRequest } from "../src/types";
import mapper from "../src/utils/mappers/friendRequests";
import { friendRequests as requests } from "../src/seeders/friendRequests";
//import userHelper from "./user_test_helper";

/*
const initialRequests: NewFriendRequest[] = requests.map((r) =>
  mapper.toNewRequestEntry(r)
);
*/

const requestsInDb = async (): Promise<FriendRequestAttributes[]> => {
  const requests = await FriendRequest.findAll({});
  const stringifiedRequests = requests.map((user) => JSON.stringify(user));
  const jsonRequests = stringifiedRequests.map((request) =>
    JSON.parse(request)
  );
  return jsonRequests;
};

export default { requestsInDb };
