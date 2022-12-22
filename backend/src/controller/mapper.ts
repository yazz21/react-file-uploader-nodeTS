import {FileAttributes} from '../interface/fileInterface'
import { FileOuput} from '../models/file.model'

export const toIngredient = (ingredient: FileOuput): FileAttributes => {
    return {
        id: ingredient.id,
        fieldname: ingredient.fieldname,
        originalname: ingredient.originalname,
        encoding: ingredient.encoding,
        mimetype: ingredient.mimetype,
        destination: ingredient.destination,
        filename: ingredient.filename,
        path: ingredient.path,
        size: ingredient.size,
        updatedAt: ingredient.updatedAt,
        createdAt: ingredient.createdAt,
        deletedAt: ingredient.deletedAt
    }
}