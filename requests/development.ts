import { Development } from '../types/development.types'
import { PaginationInfo } from '../types/util'
import { client } from './client'
import { DevelopmentListQuery } from './types/development'

export const getDevelopments = (params: DevelopmentListQuery) =>
  client
    .get<{ page: PaginationInfo; developments: Development[] }>(
      '/development',
      { params }
    )
    .then((res) => res.data)
