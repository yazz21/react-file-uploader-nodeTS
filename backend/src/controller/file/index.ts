// src/api/controllers/ingredient/index.ts

import * as service from '../../service/fileService'
import {CreateIngredientDTO, UpdateIngredientDTO, FilterIngredientsDTO} from '../../dto/file.dto'
import { FileAttributes } from '../../interface/fileInterface'
import * as mapper from '../mapper'

export const create = async(payload: CreateIngredientDTO): Promise<FileAttributes> => {
    // console.log('payload from controller index: ',payload);
    
    return mapper.toIngredient(await service.create(payload))
}
export const update = async (id: number, payload: UpdateIngredientDTO): Promise<FileAttributes> => {
    return mapper.toIngredient(await service.update(id, payload))
}
export const getById = async (id: number): Promise<FileAttributes> => {
    console.log('controller',id,await service.getById(id));
    
    return mapper.toIngredient(await service.getById(id))
}
export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(filters: FilterIngredientsDTO): Promise<FileAttributes[]> => {
    return (await service.getAll(filters)).map(mapper.toIngredient)
}