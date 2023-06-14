'use strict';
import {
  Model,
} from 'sequelize';

interface PublicationAttributes {
  id: number,
  userId: String,
  title: String,
  message: String,
  createdAt: Date,
  updatedAt: Date
  validUntil: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Publication extends Model<PublicationAttributes>
    implements PublicationAttributes {
    
      id!: number;
      userId!: string;
      title!: string;
      message!: String;
      createdAt!: Date;
      updatedAt!: Date;
      validUntil!: Date;

    
    static associate(models: any) {
      // define association here
      Publication.belongsTo(models.User,
        { foreignKey: 'userId' });
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
    userId: {
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
    validUntil: {
      type: DataTypes.DATE,
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