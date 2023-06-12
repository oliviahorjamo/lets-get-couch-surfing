import { Model, DataTypes } from "sequelize";
import db from "../db";
const { sequelize } = db;

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    publicationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "publications", key: "id" },
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sentBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    sentTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "message",
  }
);

export default Message;
