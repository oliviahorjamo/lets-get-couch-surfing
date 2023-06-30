import FriendRequest from "../src/db/models/friendRequest";
import { FriendRequestAttributes, NewFriendRequest } from "../src/types";
import mapper from "../src/utils/mappers/friendRequests";
import { friendRequests as requests } from "../src/seeders/friendRequests";

const initialRequests: NewFriendRequest[] = requests.map(
  r => mapper.toNewRequestEntry(r)
);

/*
const nonExistingId = async () => {
  const user = new User({
    name: "test",
    username: "test",
    password: "test",
    id: uuidv4(),
  });
  await user.save();
  await user.deleteOne();

  return user._id.toString();
};
*/

const requestsInDb = async (): Promise<FriendRequestAttributes[]> => {
  const requests = await FriendRequest.findAll({});
  const stringifiedRequests = requests.map(user => JSON.stringify(user));
  const jsonRequests = stringifiedRequests.map(request => JSON.parse(request));
  return jsonRequests;
};

export default { initialRequests, requestsInDb};