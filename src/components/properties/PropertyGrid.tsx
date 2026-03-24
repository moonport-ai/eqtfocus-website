import { PropertyCard } from "./PropertyCard";
import { NoResults } from "./NoResults";
import type { Listing } from "@/types/listing";

interface PropertyGridProps {
  listings: Listing[];
}

export function PropertyGrid({ listings }: PropertyGridProps) {
  if (!listings || listings.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <PropertyCard key={listing.mlsNumber} listing={listing} />
      ))}
    </div>
  );
}
