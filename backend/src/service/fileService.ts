// api/services/ingredientService.ts

import * as ingredientDal from '../db/dal/file'
import {GetAllFilesFilters} from '../db/dal/types'
import {FileInput, FileOuput} from '../models/file.model'

export const create = (payload: FileInput): Promise<FileOuput> => {
    // console.log('payload from services: ', payload);
    
    return ingredientDal.create(payload)
}
export const update = (id: number, payload: Partial<FileInput>): Promise<FileOuput> => {
    return ingredientDal.update(id, payload)
}
export const getById = (id: number): Promise<FileOuput> => {
    return ingredientDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
    return ingredientDal.deleteById(id)
}
export const getAll = (filters: GetAllFilesFilters): Promise<FileOuput[]> => {
    return ingredientDal.getAll(filters)
}
