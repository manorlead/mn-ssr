import { ResidentialListing } from '../types/listing.type'
import { PaginationInfo } from '../types/util'
import { client } from './client'
import { ResidentialFilters } from './types/residential'

export const getResidentialListings = (query: ResidentialFilters) =>
  client
    .get<{ page: PaginationInfo; residentialListings: ResidentialListing[] }>(
      '/listings/residential',
      { params: query }
    )
    .then((res) => res.data)
