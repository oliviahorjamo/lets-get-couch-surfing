import { Model, DataTypes } from "sequelize";
const { sequelize } = require("../db");

class Friendship extends Model {}

Friendship.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    user2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "friendships",
  }
);

Friendship.sync();

export default Friendship;
