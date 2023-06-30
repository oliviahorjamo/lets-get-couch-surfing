import app from "../src/app";
import supertest from "supertest";
import sequelizeConnection from "../src/db/config";
import initDb from "../src/db/init";

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
  // Here destroy all existing friendships
});

describe("sending friend requests", () => {
  test("a valid friend request can be sent", async () => {

  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
