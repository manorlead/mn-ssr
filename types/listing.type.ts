export interface PredictedPrice {
  predictedPrice: number
  predictedPriceUpper: number
  predictedPriceLower: number
}

export interface RoomsDetail {
  roomType: string
  roomNumber: number
  features: string
  roomLength: number
  roomWidth: number
}

export interface VirtualTourData {
  virtualTourUrl: string
  virtualTourUrlType: string
}

export interface ResidentialListing {
  id: string
  active: boolean
  unitNumber?: string
  streetAddress: string
  mlsNumber: string
  bedrooms: string
  extraBedrooms: string
  baths: string
  community: string
  city: string
  area: string
  postalCode: string
  price: string
  originalPrice: string
  predictedPrices: string
  predictedPrice: PredictedPrice
  virtualTourUrl?: VirtualTourData
  sqftMin: string
  sqftMax: string
  leaseOrSale: string
  propertyType: string
  description: string
  brokerage: string
  style: string
  lotDepth: string
  lotFront: string
  occupancy: string
  heating: string
  cooling: string
  fuel: string
  rooms: string
  parkingSpcs: string
  garType: string
  garSpaces: string
  water: string
  lng: string
  lat: string
  images: string[]
  openHouseTag: boolean
  listedByManorleadTag: boolean
  hotTag: boolean
  taxes: number
  pool: string
  yearBuilt: string
  exterior1: string
  exterior2?: string
  roomsDetails: RoomsDetail[]
  daysOnManorlead: number
  userViews: number
  schoolBoundary?: SchoolBoundaryDetail[]
}

export interface SchoolBoundaryDetail {
  latitude: number
  longitude: number
  boundaryType: string
  id: string
  schoolName: string
  area: string
  rating: number
  ratingYear: number
  address: string
  website: string
  province: string
  municipality: string
  phone: string
  level: string
  boardType: string
  distance: number
}
