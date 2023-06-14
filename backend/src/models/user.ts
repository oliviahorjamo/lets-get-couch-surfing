'use strict';
import {
  Model,
  UUIDV4,
} from 'sequelize';

interface UserAttributes {
  id: string,
  name: string,
  username: string,
  password: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>
    implements UserAttributes {
      id!: string;
      name!: string;
      username!: string;
      password!: string;
      static associate(models: any) {
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
    sequelize,
    modelName: 'User',
  });
  
  return User;
};