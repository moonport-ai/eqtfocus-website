export interface ListingAddress {
  area: string;
  city: string;
  country: string;
  district: string;
  majorIntersection: string;
  neighborhood: string;
  streetDirection: string;
  streetName: string;
  streetNumber: string;
  streetSuffix: string;
  unitNumber: string;
  zip: string;
  state: string;
  communityCode: string;
  streetDirectionPrefix: string;
}

export interface ListingMap {
  latitude: number;
  longitude: number;
  point: string;
}

export interface ListingDetails {
  numBedrooms: string;
  numBedroomsPlus: string;
  numBathrooms: string;
  numBathroomsHalf: string;
  numRooms: string;
  sqft: string;
  yearBuilt: string;
  propertyType: string;
  style: string;
  description: string;
  airConditioning: string;
  basement1: string;
  basement2: string;
  garage: string;
  heating: string;
  swimmingPool: string;
  exteriorConstruction1: string;
  exteriorConstruction2: string;
  driveway: string;
  virtualTourUrl: string;
  den: string;
  patio: string;
}

export interface ListingRoom {
  description: string;
  features: string;
  features2: string;
  features3: string;
  length: string;
  width: string;
  level: string;
}

export interface ListingLot {
  acres: string;
  depth: string;
  width: string;
  size: string;
  legalDescription: string;
}

export interface ListingTaxes {
  annualAmount: string;
  assessmentYear: string;
}

export interface ListingTimestamps {
  listingUpdated: string;
  photosUpdated: string;
  closedDate: string;
  expiryDate: string;
  repliersUpdatedOn: string;
}

export interface ListingOffice {
  brokerageName: string;
}

export interface OpenHouse {
  date: string;
  startTime: string;
  endTime: string;
  type: string;
  status: string;
}

export interface Listing {
  mlsNumber: string;
  resource: string;
  status: string;
  class: string;
  type: string;
  listPrice: string;
  listDate: string;
  lastStatus: string;
  soldPrice: string;
  soldDate: string;
  originalPrice: string;
  daysOnMarket: string;
  occupancy: string;
  updatedOn: string;
  boardId: string;
  photoCount: string;
  address: ListingAddress;
  map: ListingMap;
  details: ListingDetails;
  images: string[];
  rooms: ListingRoom[];
  lot: ListingLot;
  taxes: ListingTaxes;
  timestamps: ListingTimestamps;
  office: ListingOffice;
  nearby?: {
    amenities: string[];
  };
  openHouse?: OpenHouse[];
}
