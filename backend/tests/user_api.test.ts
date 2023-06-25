import app from "../src/app";
import supertest from "supertest";
import User from "../src/db/models/user";
import sequelizeConnection from "../src/db/config";
import { UserOutputAttributes } from "../src/db/models/user";
import initDb from "../src/db/init";
import helper from "./user_test_helper";

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

beforeEach(async () => {
  await User.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });
  const userObjects = helper.initialUsers
    .map(user => new User(user));
  const promiseArray = userObjects.map(user => user.save());
  await Promise.all(promiseArray);
});

describe("getting all users", () => {
  test("specific user within the returned users", async () => {
    const response = await api.get("/api/users/");
    const users = assertResponseType<UserOutputAttributes[]>(response);
    const usernames = users.map((u) => u.username);
    expect(usernames).toContain("testuser");
  });

  test("all users are returned", async () => {
    const response = await api.get("/api/users");
    expect(response.body).toHaveLength(helper.initialUsers.length);
  });

});

describe("viewing a specific user", () => {
  test("succeeds with a valid id", async () => {
    const usersAtStart = await helper.usersInDb();
    const userToView = usersAtStart[0];
    const resultUser = await api
      .get(`/api/users/${userToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(resultUser.body).toEqual(userToView);
  });
});

describe("adding a new user", () => {
  test("user with a new username can be added", async() => {
    await api.post("/api/users/")
      .send(helper.newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const response = await api.get('/api/users');
    const usersAtEnd = assertResponseType<UserOutputAttributes[]>(response);
    expect(usersAtEnd).toHaveLength(helper.initialUsers.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain("testuser2");
  });

  test("duplicate usernames not allowed", async () => {
    await api.post("/api/users/")
      .send(helper.initialUsers[0])
      .expect(500);
  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
