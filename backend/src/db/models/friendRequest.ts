'use strict';
import {
  Model,
  UUIDV4,
  DataTypes
} from 'sequelize';
import sequelizeConnection from '../config';
import { FriendRequestAttributes, NewFriendRequest } from '../../types';
//import { ModelInterface } from '.';

class FriendRequest extends Model<FriendRequestAttributes, NewFriendRequest>
  implements FriendRequestAttributes {
    id!: string;
    senderId!: string;
    receiverId!: string;
    createdAt!: Date;
    status!: 'pending' | 'created';

    /*
    static associate(models: ModelInterface) {
      FriendRequest.hasMany(models.User, {
        foreignKey: 'senderId',
      });

      FriendRequest.hasMany(models.User, {
        otherKey: 'receiverId',
      });

    }
    */
}

FriendRequest.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  senderId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  receiverId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'FriendRequest',
  timestamps: true,
  updatedAt: false
});

export default FriendRequest;
