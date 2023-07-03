'use strict';
import {
  Model,
  UUIDV4,
  DataTypes,
  HasManyGetAssociationsMixin
} from 'sequelize';
import sequelizeConnection from '../config';
import { UserAttributes, UserInputAttributes } from '../../types';
import FriendRequest from './friendRequest';

class User extends Model<UserAttributes, UserInputAttributes> implements UserAttributes {
    id!: string;
    name!: string;
    username!: string;
    password!: string;
    createdAt!: Date;
    updatedAt!: Date;

    static associate() {
      User.belongsToMany(User, {
        as: 'receivers',
        through: FriendRequest,
        foreignKey: 'senderId' // The id of this user should be found in senderId field of all receivers' friend requests
      });

      User.belongsToMany(User, {
        as: 'senders',
        through: FriendRequest,
        foreignKey: 'receId'
      });
    }

    getSenders!: HasManyGetAssociationsMixin<User>;
    getReceivers!: HasManyGetAssociationsMixin<User>;
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: sequelizeConnection,
  modelName: 'User',
  timestamps: true
});

User.associate();

export default User;
