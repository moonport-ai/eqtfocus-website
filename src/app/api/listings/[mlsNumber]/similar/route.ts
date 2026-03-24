import { NextRequest, NextResponse } from 'next/server';

const REPLIERS_BASE_URL = process.env.REPLIERS_BASE_URL || 'https://api.repliers.io';
const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY || '';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ mlsNumber: string }> }
) {
  try {
    const { mlsNumber } = await params;

    const response = await fetch(
      `${REPLIERS_BASE_URL}/listings/${mlsNumber}/similar`,
      {
        method: 'GET',
        headers: {
          'REPLIERS-API-KEY': REPLIERS_API_KEY,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 1800 },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Repliers similar listings error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Failed to fetch similar listings' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Similar listings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch similar listings' },
      { status: 500 }
    );
  }
}
