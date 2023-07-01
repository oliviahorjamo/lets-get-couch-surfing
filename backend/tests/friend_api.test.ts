import app from "../src/app";
import supertest from "supertest";
import sequelizeConnection from "../src/db/config";
import initDb from "../src/db/init";
import FriendRequest from "../src/db/models/friendRequest";
import requestHelper from "./friend_request_test_helper";
import userHelper from "./user_test_helper";

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
});

describe("sending friend requests", () => {
  test("a valid friend request is sent through route", async () => {
    const usersInDb = await userHelper.usersInDb();
    const newRequest = {
      senderId: usersInDb[0].id,
      receiverId: usersInDb[1].id,
    };
    const response = await api.post("/api/friends/requests/").send(newRequest);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(newRequest);
  });

  test("a valid friend request is added to db through route", async () => {
    const usersInDb = await userHelper.usersInDb();
    const friendRequestsInBeginning = await requestHelper.requestsInDb();
    const newRequest = {
      senderId: usersInDb[0].id,
      receiverId: usersInDb[1].id,
    };
    await api.post("/api/friends/requests").send(newRequest);
    const requestsInEnd = await requestHelper.requestsInDb();
    // For osme reason the requestsInEnd object doesn't have a toHaveLength -method
  });
});

afterAll(async () => {
  await sequelizeConnection.close();
});
