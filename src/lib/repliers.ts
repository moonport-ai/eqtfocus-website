"use server";

import { Listing } from "@/types/listing";
import { SearchResponse } from "@/types/search";

const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY!;
const REPLIERS_BASE_URL =
  process.env.REPLIERS_BASE_URL || "https://api.repliers.io";

interface RepliersRequestOptions {
  endpoint: string;
  params?: Record<string, string | number | undefined>;
  method?: "GET" | "POST";
  body?: Record<string, unknown>;
}

/**
 * Makes a request to the Repliers API.
 * Server-side only - uses REPLIERS_API_KEY from environment.
 */
async function repliersRequest<T>({
  endpoint,
  params,
  method = "GET",
  body,
}: RepliersRequestOptions): Promise<T> {
  const url = new URL(`${REPLIERS_BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const headers: HeadersInit = {
    "REPLIERS-API-KEY": REPLIERS_API_KEY,
    "Content-Type": "application/json",
  };

  const fetchOptions: RequestInit = {
    method,
    headers,
    next: { revalidate: 300 },
  };

  if (body && method === "POST") {
    fetchOptions.body = JSON.stringify(body);
  }

  const response = await fetch(url.toString(), fetchOptions);

  if (!response.ok) {
    throw new Error(
      `Repliers API error: ${response.status} ${response.statusText} - ${url.pathname}`,
    );
  }

  return response.json() as Promise<T>;
}

/**
 * Search listings with the given parameters.
 */
export async function searchListings(
  params: Record<string, string | undefined>,
): Promise<SearchResponse> {
  return repliersRequest<SearchResponse>({
    endpoint: "/listings",
    params,
  });
}

/**
 * Get a single listing by MLS number.
 */
export async function getListing(mlsNumber: string): Promise<Listing> {
  return repliersRequest<Listing>({
    endpoint: `/listings/${mlsNumber}`,
  });
}

/**
 * Get similar listings for a given MLS number.
 */
export async function getSimilarListings(
  mlsNumber: string,
): Promise<SearchResponse> {
  return repliersRequest<SearchResponse>({
    endpoint: `/listings/${mlsNumber}/similar`,
  });
}

export { repliersRequest };
