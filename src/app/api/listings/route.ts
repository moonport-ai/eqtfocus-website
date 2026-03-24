import { NextRequest, NextResponse } from 'next/server';

const REPLIERS_BASE_URL = process.env.REPLIERS_BASE_URL || 'https://api.repliers.io';
const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY || '';

const ALLOWED_PARAMS = [
  'city', 'area', 'state', 'neighborhood', 'zip',
  'minPrice', 'maxPrice',
  'minBedrooms', 'maxBedrooms',
  'minBaths', 'maxBaths',
  'propertyType', 'type', 'status', 'class',
  'minSqft', 'maxSqft',
  'pageNum', 'resultsPerPage',
  'sortBy',
  'search', 'searchFields',
  'fields',
  'lastStatus',
  'minListDate', 'maxListDate',
];

function buildParams(searchParams: URLSearchParams): Record<string, string> {
  const params: Record<string, string> = {};

  ALLOWED_PARAMS.forEach((key) => {
    const value = searchParams.get(key);
    if (value) params[key] = value;
  });

  // Default to active sale listings
  if (!params.status) params.status = 'A';
  if (!params.type) params.type = 'sale';
  if (!params.resultsPerPage) params.resultsPerPage = '12';
  if (!params.class) params.class = 'residential';

  return params;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = buildParams(searchParams);

    const url = new URL(`${REPLIERS_BASE_URL}/listings`);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'REPLIERS-API-KEY': REPLIERS_API_KEY,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Repliers API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to fetch listings', status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Listings search error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}

// POST handler for geo-spatial map search using Repliers' "map" parameter
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const params = buildParams(searchParams);
    const body = await request.json();

    // body should contain { map: number[][][] }
    if (!body.map || !Array.isArray(body.map)) {
      return NextResponse.json(
        { error: 'Missing or invalid "map" parameter in body' },
        { status: 400 }
      );
    }

    const url = new URL(`${REPLIERS_BASE_URL}/listings`);
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'REPLIERS-API-KEY': REPLIERS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ map: body.map }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Repliers API map error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to fetch listings', status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Map listings search error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500 }
    );
  }
}
