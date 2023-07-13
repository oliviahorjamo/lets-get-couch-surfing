'use strict';
import {
  Model,
  DataTypes
} from 'sequelize';

import sequelizeConnection from '../config';
import { PublicationAttributes, PublicationInputAttributes } from '../../types';



class Publication extends Model<PublicationAttributes, PublicationInputAttributes>
  implements PublicationAttributes {
  
    id!: number;
    createdBy!: string;
    title!: string;
    message!: String;
    createdA!: Date;
    updatedAt!: Date;
    lat!: number;
    lon!: number;

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
  },
  lat: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  lon: {
    type: DataTypes.DECIMAL,
    allowNull: true
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'Publication',
  timestamps: true
});

export default Publication;