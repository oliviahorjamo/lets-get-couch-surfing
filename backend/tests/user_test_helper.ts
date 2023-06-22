import User from "../src/db/models/user";
import { v4 as uuidv4 } from "uuid";

const initialUsers = [
  {
    name: "Tester",
    username: "testuser",
    password: "secret",
    id: uuidv4(),
  },
];

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

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

module.exports = {
  initialUsers,
  usersInDb,
};
