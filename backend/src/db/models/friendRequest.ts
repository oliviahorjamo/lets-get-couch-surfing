"use strict";
import { Model, DataTypes, Op } from "sequelize";
import sequelizeConnection from "../config";
import { FriendRequestAttributes, NewFriendRequest, Status } from "../../types";
//import { ModelInterface } from '.';
//import User from './user';

class FriendRequest
  extends Model<FriendRequestAttributes, NewFriendRequest>
  implements FriendRequestAttributes
{
  id!: number;
  senderId!: string;
  receiverId!: string;
  createdAt!: Date;
  status!: Status;

  
  // Currently not needed for anything
  /*
  static associate() {
    FriendRequest.belongsTo(User, {
      as: 'sender',
      foreignKey: 'senderId'
    });

    FriendRequest.belongsTo(User, {
      as: 'receiver',
      foreignKey: 'receiverId'
    });
  }
  */
  
}

FriendRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    receiverId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "FriendRequest",
    timestamps: true,
    updatedAt: false,
  }
);

FriendRequest.addHook(
  "beforeCreate",
  "uniqueCombination",
  async (instance: FriendRequest) => {
    const existingRequests = await FriendRequest.findAll({
      where: {
        [Op.or]: [
          {
            receiverId: instance.receiverId,
            senderId: instance.senderId,
          },
          {
            receiverId: instance.senderId,
            senderId: instance.receiverId,
          },
        ],
      },
    });

    if (existingRequests.length > 0) {
      throw new Error("Friend request already exists.");
    }
  }
);

export default FriendRequest;
