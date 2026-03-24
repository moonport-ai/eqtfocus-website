import { Listing } from "./listing";

export interface SearchResponse {
  page: number;
  numPages: number;
  pageSize: number;
  count: number;
  listings: Listing[];
  statistics?: any;
}

export interface FilterState {
  area?: string;
  city?: string;
  minPrice?: string;
  maxPrice?: string;
  minBedrooms?: string;
  minBaths?: string;
  propertyType?: string;
  status?: string;
  search?: string;
  sortBy?: string;
  pageNum?: string;
  resultsPerPage?: string;
  view?: "grid" | "list";
}
