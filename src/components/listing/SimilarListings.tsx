'use client';

import { useEffect, useState } from 'react';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Skeleton } from '@/components/ui';
import type { Listing } from '@/types/listing';

interface SimilarListingsProps {
  mlsNumber: string;
}

export default function SimilarListings({ mlsNumber }: SimilarListingsProps) {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSimilar() {
      try {
        const res = await fetch(`/api/listings/${mlsNumber}/similar`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setListings(data.listings?.slice(0, 3) || []);
      } catch {
        setListings([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSimilar();
  }, [mlsNumber]);

  if (!loading && listings.length === 0) return null;

  return (
    <div className="mt-12 pt-12 border-t border-brand-light-gray">
      <h2 className="font-heading text-2xl text-brand-dark-gray mb-2">Similar Properties</h2>
      <div className="w-12 h-px bg-brand-black mb-8" />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-[4/3] w-full" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-36" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <PropertyCard key={listing.mlsNumber} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}
