export interface Developer {
  id: string
  name: string
}
export interface GetDevelopersRes {
  page: {
    pageCount: string
    totalCount: string
    offset: string
  }
  developers: Developer[]
}
