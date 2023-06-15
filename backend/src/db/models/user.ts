'use strict';
import {
  Model,
  UUIDV4,
  DataTypes
} from 'sequelize';
import sequelizeConnection from '../config';

interface UserAttributes {
  id: string,
  name: string,
  username: string,
  password: string
}

class User extends Model<UserAttributes>
  implements UserAttributes {
    id!: string;
    name!: string;
    username!: string;
    password!: string;
    static associate(models: any) {
      // nää myöhemmin importattuna
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
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'User',
});

export default User;
