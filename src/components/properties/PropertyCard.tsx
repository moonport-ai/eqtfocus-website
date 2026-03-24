import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice, formatAddress, getListingImageUrl, formatSqft } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import type { Listing } from "@/types/listing";

interface PropertyCardProps {
  listing: Listing;
}

export function PropertyCard({ listing }: PropertyCardProps) {
  const imageUrl = listing.images?.[0]
    ? getListingImageUrl(listing.images[0])
    : "";
  const address = formatAddress(listing.address);
  const beds = listing.details?.numBedrooms || "0";
  const baths = listing.details?.numBathrooms || "0";
  const sqft = listing.details?.sqft;

  return (
    <Link
      href={`/properties/${listing.mlsNumber}`}
      className={cn(
        "group block bg-white rounded-lg overflow-hidden border border-brand-light-gray/50",
        "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={address || "Property image"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-light-gray to-brand-cream flex items-center justify-center">
            <svg
              className="h-16 w-16 text-brand-medium-gray/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 21V12h6v9"
              />
            </svg>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge status={listing.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <p className="font-heading text-2xl text-brand-dark-gray">
          {formatPrice(listing.listPrice)}
        </p>

        {/* Address */}
        <p className="font-body text-sm text-brand-medium-gray mt-1 truncate">
          {address}
        </p>

        {/* Details Row */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-brand-light-gray/50">
          {/* Bedrooms */}
          <div className="flex items-center gap-1.5 text-brand-dark-gray">
            <svg
              className="h-4 w-4 text-brand-medium-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 7v11a1 1 0 001 1h16a1 1 0 001-1V7M3 7l3-4h12l3 4M8 19v-4h8v4M3 11h18"
              />
            </svg>
            <span className="font-body text-sm">{beds} Beds</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-1.5 text-brand-dark-gray">
            <svg
              className="h-4 w-4 text-brand-medium-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 12h16M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6M4 12V6a2 2 0 012-2h1a1 1 0 011 1v7"
              />
            </svg>
            <span className="font-body text-sm">{baths} Baths</span>
          </div>

          {/* Sqft */}
          {sqft && (
            <div className="flex items-center gap-1.5 text-brand-dark-gray">
              <svg
                className="h-4 w-4 text-brand-medium-gray"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
                />
              </svg>
              <span className="font-body text-sm">{formatSqft(sqft)} sqft</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
