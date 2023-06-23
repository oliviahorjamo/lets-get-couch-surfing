'use strict';
import {
  Model,
  UUIDV4,
  DataTypes
} from 'sequelize';
import sequelizeConnection from '../config';

import { ModelInterface } from '.';

export interface UserAttributes {
  id: string,
  name: string,
  username: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date
}

export type UserInputAttributes = Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>;
export type UserOutputAttributes = Required<UserAttributes>;


class User extends Model<UserAttributes, UserInputAttributes>
  implements UserAttributes {
    id!: string;
    name!: string;
    username!: string;
    password!: string;
    createdAt!: Date;
    updatedAt!: Date;

    static associate(models: ModelInterface) {
      User.hasMany(models.Publication, {
        foreignKey: 'createdBy'
      });

      User.belongsToMany(models.User, {
        as: 'Friends',
        through: 'friends'
      });
    }
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

export default User;
