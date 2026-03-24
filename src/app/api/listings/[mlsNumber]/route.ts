import { NextRequest, NextResponse } from 'next/server';

const REPLIERS_BASE_URL = process.env.REPLIERS_BASE_URL || 'https://api.repliers.io';
const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY || '';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ mlsNumber: string }> }
) {
  try {
    const { mlsNumber } = await params;

    const response = await fetch(`${REPLIERS_BASE_URL}/listings/${mlsNumber}`, {
      method: 'GET',
      headers: {
        'REPLIERS-API-KEY': REPLIERS_API_KEY,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Listing not found' },
          { status: 404 }
        );
      }
      const errorText = await response.text();
      console.error('Repliers API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to fetch listing' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Listing detail error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch listing' },
      { status: 500 }
    );
  }
}
