import { CreationOptional, Optional } from "sequelize/types"

export type CreateIngredientDTO = {
  id: CreationOptional<number>;
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: string;
}

export type UpdateIngredientDTO = Optional<CreateIngredientDTO, 'id'>

export type FilterIngredientsDTO = {
    isDeleted?: boolean
}