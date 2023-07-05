'use strict';
import {
  Model,
  DataTypes
} from 'sequelize';

import sequelizeConnection from '../config';
import { PublicationAttributes, PublicationInputAttributes } from '../../types';
import User from './user';


class Publication extends Model<PublicationAttributes, PublicationInputAttributes>
  implements PublicationAttributes {
  
    id!: number;
    createdBy!: string;
    title!: string;
    message!: String;
    createdA!: Date;
    updatedAt!: Date;

  /*
  static associate() {
    // define association here
    Publication.belongsTo(User,
      { foreignKey: 'createdBy' });
  }
  */
}

Publication.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'Publication',
  timestamps: true
});

//Publication.associate();

export default Publication;