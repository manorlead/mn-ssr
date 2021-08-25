import { Developer } from './developer.types'

export interface Development {
  id: string
  address: string
  priority: string
  allFloorPlans: FloorPlan[]
  amenities: Amenity[]
  amenityImageUrls: string[]
  capacity: string
  commonExpense: string
  completionYear: number
  completionSeason: string
  createdAt: number
  description: string
  details: Detail[]
  developers: Developer[]
  developmentTypes: DevelopmentType[]
  features: string
  heroImageUrl: string
  longitude: number
  latitude: number
  minPrice: number
  maxPrice: number
  minType: string
  maxType: string
  minSqft: number
  maxSqft: number
  municipality: string
  name: string
  ownership: string
  paymentStructures: PaymenStructure[]
  phase: string
  policies: Policy[]
  presentationAddress: string
  postalCode: string
  projectImageUrls: string[]
  status: string
  province: string
  saleYear: number
  saleSeason: string
  updatedAt: number
}

export interface DevelopmentType {
  id: string
  name: string
}

export interface PaymenStructure {
  id: string
  name: string
}

export interface Detail {
  id: string
  title: string
  description: string
}

export interface Amenity {
  id: string
  name: string
  type: string
  description?: string
}

export interface Policy {
  id: string
  name: string
  description?: string
}

export interface FloorPlan {
  id: string
  available: boolean
  baths?: number
  beds?: number
  // changes: FloorPlanChange[]
  entryDate?: number[] | string
  units: FloorPlanUnit[]
  imageUrls: string[]
  name: string
  type: string
  outdoorSqft?: number
  startingPrice?: number
  sqft?: number
}

export interface FloorPlanChange {
  createdAt: string
  eventType:
    | 'CREATION_FLOORPLAN'
    | 'CREATION_FLOOR'
    | 'DELETION_FLOOR'
    | 'CHANGE_PRICE'
    | 'CHANGE_SQFT'
    | 'CHANGE_FLOOR'
  id: string
  newFloor: FloorPlanUnit
  newPrice: number
  newSqft: number
  previousFloor: FloorPlanUnit
  previousPrice: number
  previousSqft: number
}

export interface FloorPlanUnit {
  floor: number
  id: string
  price: number
  unitNo: string
}
