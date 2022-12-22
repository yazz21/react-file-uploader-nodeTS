// db/dal/ingredient.ts

import {Op} from 'sequelize'
import { File } from '../../models'
import { GetAllFilesFilters } from '../dal/types'
import {FileInput, FileOuput} from '../../models/file.model'

export const create = async (payload: FileInput): Promise<FileOuput> => {
    const ingredient = await File.create(payload)
console.log('ingrediant: ',ingredient);

    return ingredient
}

export const update = async (id: number, payload: Partial<FileInput>): Promise<FileOuput> => {
    const ingredient = await File.findByPk(id)
    if (!ingredient) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updatedIngredient = await (ingredient as File).update(payload)
    return updatedIngredient
}

export const getById = async (id: number): Promise<FileOuput> => {
    console.log('file.findbypk',id);
    
    console.log( await File.findByPk(id));
    
    const ingredient = await File.findByPk(id)
    console.log('ingredient',ingredient);
    
    if (!ingredient) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return ingredient
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedIngredientCount = await File.destroy({
        where: {id}
    })
    return !!deletedIngredientCount
}

export const getAll = async (filters?: GetAllFilesFilters): Promise<FileOuput[]> => {
    return File.findAll({
        // where: {
        //     ...(filters?.isDeleted && {deleted: {[Op.not]: null}})
        // },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}
