import app from "../src/app";
import supertest from "supertest";
//import User from "../src/models/user";
const sequelize = require("../src/db");

const api = supertest(app);

// Next step, fix this to create a connection to the test db
// probs in common for all test modules
// have a beforeEach for emptying the db
// etc.

test("user route returns a list of users", async () => {
  await api.get("/api/users/").expect(200);
});

afterAll(() => {
  sequelize.close();
});
