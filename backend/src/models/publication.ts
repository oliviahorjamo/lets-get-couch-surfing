'use strict';
import {
  Model,
} from 'sequelize';

interface PublicationAttributes {
  id: number,
  createdBy: String,
  title: String,
  message: String,
  createdAt: Date,
  updatedAt: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Publication extends Model<PublicationAttributes>
    implements PublicationAttributes {
    
      id!: number;
      createdBy!: string;
      title!: string;
      message!: String;
      createdAt!: Date;
      updatedAt!: Date;

    
    static associate(models: any) {
      // define association here
      Publication.belongsTo(models.User,
        { foreignKey: 'createdBy' });
    }
  }
  Publication.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Publication',
    timestamps: true
  });
  return Publication;
};