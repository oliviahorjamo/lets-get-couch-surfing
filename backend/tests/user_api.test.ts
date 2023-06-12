import app from "../src/app";
import supertest from "supertest";
import User from "../src/models/user";
import db from "../src/db";
const { sequelize } = db;

const api = supertest(app);

const inititalUsers = [
  {
    name: "Tester",
    username: "testuser",
    password: "secret",
  },
];

beforeEach(async () => {
  await User.destroy({
    where: {},
    truncate: true,
    cascade: true,
  });
  let userObject = User.build(inititalUsers[0]);
  await userObject.save();
});

test("user route returns a list of users", async () => {
  await api.get("/api/users/").expect(200);
});

afterAll(async () => {
  await sequelize.close();
});
