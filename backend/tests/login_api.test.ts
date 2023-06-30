import app from "../src/app";
import supertest from "supertest";
import User from "../src/db/models/user";
import sequelizeConnection from "../src/db/config";
import { UserOutputAttributes } from "../src/types";
import initDb from "../src/db/init";
import helper from "./user_test_helper";

const api = supertest(app);

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
  const userObjects = helper.initialUsers.map((user) => new User(user));
  const promiseArray = userObjects.map((user) => user.save());
  await Promise.all(promiseArray);
});

describe("logging in with existing user works", () => {
  test("existing user can log in", async () => {
    const usersInDb = await helper.usersInDb();
    const userToLogin: UserOutputAttributes = usersInDb[0];
    const loginCredentials = {username: userToLogin.username, password: userToLogin.password};
    const response = await api.post("/api/login")
      .send(loginCredentials)
      .expect(200);
    // Mapping to UserEntry doesn't work here as the dates in the -response body
    // are returned as strings and not dates due to sending them as res.json().
    // This is likely to create issues in the frontend when mapping the objects returned to userEntries.
    // In the backend the types are related to data returned from the backend
    // In the frontend the types are related to json data --> dates handled differently

    //const username = userMapper.toUserEntry(response.body).username;
    const username = response.body.username;
    expect(username).toEqual(userToLogin.username);

  });
});

describe("logging in with wrong credentials doesn't work", () => {
  test("logging in with wrong password doesn't work", async () => {
    const usersInDb = await helper.usersInDb();
    const userTologin: UserOutputAttributes = usersInDb[0];
    const loginCredentials = { username: userTologin.username, password: userTologin.password + "wrong"};
    const response = await api.post("/api/login")
      .send(loginCredentials)
      .expect(500);
    expect(response.body).toContain("Incorrect password");
  });

  test("logging in with non existing username doesn't work", async () => {
    const usersInDb = await helper.usersInDb();
    const userTologin: UserOutputAttributes = usersInDb[0];
    const loginCredentials = { username: userTologin.username + "new", password: userTologin.password};
    const response = await api.post("/api/login")
      .send(loginCredentials)
      .expect(500);
    expect(response.body).toContain("User not found with the given username");
  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
