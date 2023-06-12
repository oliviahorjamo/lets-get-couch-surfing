//import { UserAttributes } from "../types/user";
import { Model, DataTypes } from "sequelize";
import db from "../../db";
import { UserAttributes } from "../../types/user";
const { sequelize } = db;

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public username!: string;
  public password!: string;

  // define associations here e.g. having multiple publications, messages and friendships
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "user",
  }
);

export default User;
