import app from "../src/app";
import supertest from "supertest";
import User from "../src/db/models/user";
import { v4 as uuidv4 } from "uuid";
import sequelizeConnection from "../src/db/config";
import { UserAttributes } from "../src/db/models/user";
import initDb from "../src/db/init";
import * as helper from "./user_test_helper";

const api = supertest(app);

function assertResponseType<T>(response: any): T {
  return response.body as T;
}

beforeAll(() => {
  initDb()
    .then(() => {
      console.log("test db initialized");
    })
    .catch(() => {
      console.log("something went wrong when initializing test db");
    });
});

const inititalUsers = [
  {
    name: "Tester",
    username: "testuser",
    password: "secret",
    id: uuidv4(),
  },
];

beforeEach(async () => {
  await User.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });
  const userObject = User.build(inititalUsers[0]);
  await userObject.save();
});

describe("get requests", () => {
  test("user route returns a list of users", async () => {
    const response = await api.get("/api/users/");
    const users = assertResponseType<UserAttributes[]>(response);
    const usernames = users.map((u) => u.username);
    expect(usernames).toContain("testuser");
  });

  test("getting one user works", async () => {
    const usersAtBeginning = await helper.usersInDb();
    const userToView = usersAtBeginning[0];
    const resultUser = await api
      .get(`/api/users/${userToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(resultUser.body).toEqual(userToView);
  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
