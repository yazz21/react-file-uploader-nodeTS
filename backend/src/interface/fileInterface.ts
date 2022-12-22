import { CreationOptional } from "sequelize";

export interface FileAttributes {
    id: CreationOptional<number>;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: string;
    // deleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
  }