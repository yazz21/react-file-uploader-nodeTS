// interface ListFilters {
//     isDeleted?: boolean
//     includeDeleted?: boolean
// }

// export interface GetAllFilesFilters extends ListFilters {
//     isPublished?: boolean
//     isNotPublished?: boolean
// }


// db/dal/types.ts

export interface GetAllFilesFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}