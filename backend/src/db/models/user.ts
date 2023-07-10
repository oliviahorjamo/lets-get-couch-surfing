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
import Publication from './publication';
import { Op } from 'sequelize';

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
        foreignKey: 'receiverId'
      });

      // Tää ei toimi, palauttaa edelleen vaan käyttäjät missä
      // id senderId:na
      User.belongsToMany(User, {
        as: 'friends',
        through: FriendRequest,
        foreignKey: 'senderId',
        scope: {
          [Op.or]: [
            { '$FriendRequest.senderId$': { [Op.col]: 'User.id' } },
            { '$FriendRequest.receiverId$': { [Op.col]: 'User.id' } },
          ],
        },
      });


      User.hasMany(Publication, {
        as: 'publications',
        foreignKey: 'createdBy'
      });

      // näistä ei oo hyötyä koska ei include vaatis edelleen kummatkin aliakset
      
      /*
      User.hasMany(FriendRequest, {
        as: 'receivedRequests',
        foreignKey: 'receiverId',
      });

      User.hasMany(FriendRequest, {
        as: 'sentRequests',
        foreignKey: 'senderId'
      });
      */

    }

    getSenders!: HasManyGetAssociationsMixin<User>;
    getReceivers!: HasManyGetAssociationsMixin<User>;
    getFriends!: HasManyGetAssociationsMixin<User>;
    getPublications!: HasManyGetAssociationsMixin<Publication>;
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
