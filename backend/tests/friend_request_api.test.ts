import app from "../src/app";
import supertest from "supertest";
import sequelizeConnection from "../src/db/config";
import initDb from "../src/db/init";
import FriendRequest from "../src/db/models/friendRequest";
import helper from "./friend_request_test_helper";

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
  await FriendRequest.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });
  const requestObjects = helper.initialRequests
    .map(request => new FriendRequest(request));
  const promiseArray = requestObjects.map(request => request.save());
  await Promise.all(promiseArray);
});

describe("sending friend requests", () => {
  test("a valid friend request can be sent", async () => {
    // Here send a request to the friend request api
  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
