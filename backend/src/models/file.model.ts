import { CreationOptional, DataTypes, Model, Optional, InferAttributes, InferCreationAttributes,  } from 'sequelize'
import sequelizeConnection from '../db/config'

interface FileAttributes {
  id: CreationOptional<number>;
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface FileInput extends Optional<FileAttributes, 'id'> {}
export interface FileOuput extends Required<FileAttributes> {}


export default class File extends Model<FileAttributes, FileInput> implements FileAttributes {
  public declare id:CreationOptional<number>
  public declare fieldname: string;
  public declare originalname: string;
  public declare encoding: string;
  public declare mimetype: string;
  public declare destination: string;
  public declare filename: string;
  public declare path: string;
  public declare size: string;
  public declare readonly createdAt: Date;
  public declare readonly updatedAt: Date;
  public declare readonly deletedAt: Date;
}

File.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  fieldname: {
    type: DataTypes.STRING,
  },
  originalname: {
    type: DataTypes.STRING
  },
  encoding: {
    type: DataTypes.TEXT
  },
  mimetype: {
    type: DataTypes.STRING
  },
  destination: {
    type: DataTypes.STRING,
  },
  filename: {
    type: DataTypes.STRING,
    unique: true
  },
  path: {
    type: DataTypes.TEXT
  },
  size: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'Files',
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

