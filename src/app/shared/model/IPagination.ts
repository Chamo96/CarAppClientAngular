import { ICar } from "./cars"
import { IPageable } from "./IPageble"

export interface IPagination {
    content: ICar[]
    pageable: IPageable
    last: boolean
    totalElements: number
    totalPages: number
    number: number
    size: number
    first: boolean
    numberOfElements: number
    empty: boolean
  }