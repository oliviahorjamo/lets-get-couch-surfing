import app from "../src/app";
import supertest from "supertest";
import User from "../src/db/models/user";
import sequelizeConnection from "../src/db/config";
import { UserOutputAttributes } from "../src/db/models/user";
import { LoginCredentials } from "../src/types";
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
  const userObjects = helper.initialUsers.map((user) => new User(user));
  const promiseArray = userObjects.map((user) => user.save());
  await Promise.all(promiseArray);
});

describe("logging in with existing user works", () => {
  test("existing user can log in", async () => {
    await api.post("/api/login").expect(200);
  });
});

describe("logging in with wrong credentials doesn't work", () => {
  test("loggin in with wrong password doesn't work", async () => {
    // test here
  });

  test("loggin in with non existing username doesn't work", async () => {
    // test here
  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
