import FriendRequest from "../src/db/models/friendRequest";
import { FriendRequestAttributes } from "../src/types";
import mapper from "../src/utils/mappers/friendRequests";

const requestsInDb = async (): Promise<FriendRequestAttributes[]> => {
  const requests = await FriendRequest.findAll({});
  // This will probably not work later when you start comparing the dates
  // Because res.json() returns the dates as strings while mapper maps them to date
  const mappedRequests = requests.map((request) =>
    mapper.toFriendRequest(request)
  );
  return mappedRequests;
};

export default { requestsInDb };
