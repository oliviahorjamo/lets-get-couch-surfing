import User from "../src/db/models/user";
import { UserInputAttributes, UserOutputAttributes } from "../src/types";
import mapper from "../src/utils/mappers/users";
import { users } from "../src/seeders/users";

const initialUsers: UserInputAttributes[] = users.map((u) =>
  mapper.toNewUserEntry(u)
);

const newUser: UserInputAttributes = {
  name: "Tester 3",
  username: "testuser3",
  password: "secret",
};

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

const usersInDb = async (): Promise<UserOutputAttributes[]> => {
  const users = await User.findAll({include: 'publications'});
  const stringifiedUsers = users.map((user) => JSON.stringify(user));
  const jsonUsers = stringifiedUsers.map((user) => JSON.parse(user));
  return jsonUsers;
};

export default { initialUsers, newUser, usersInDb };
