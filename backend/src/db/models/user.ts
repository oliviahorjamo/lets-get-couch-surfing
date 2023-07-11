'use strict';
import {
  Model,
  UUIDV4,
  DataTypes,
  HasManyGetAssociationsMixin
} from 'sequelize';
import sequelizeConnection from '../config';
import { UserAttributes, UserInputAttributes } from '../../types';
import Publication from './publication';

class User extends Model<UserAttributes, UserInputAttributes> implements UserAttributes {
    id!: string;
    name!: string;
    username!: string;
    password!: string;
    createdAt!: Date;
    updatedAt!: Date;
    lat!: null | number;
    lon!: null | number;

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
  lat: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    defaultValue: null
  },
  lon: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    defaultValue: null
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'User',
  timestamps: true
});


export default User;
