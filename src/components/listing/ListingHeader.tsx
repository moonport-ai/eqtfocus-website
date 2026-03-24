import { Badge, PriceDisplay } from '@/components/ui';
import { formatAddress } from '@/lib/utils';
import type { Listing } from '@/types/listing';

interface ListingHeaderProps {
  listing: Listing;
}

export default function ListingHeader({ listing }: ListingHeaderProps) {
  const statusLabel =
    listing.lastStatus === 'Sld'
      ? 'Sold'
      : listing.status === 'A'
        ? 'Active'
        : listing.status === 'U'
          ? 'Unavailable'
          : listing.status;

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <PriceDisplay
              price={listing.lastStatus === 'Sld' && listing.soldPrice ? listing.soldPrice : listing.listPrice}
              size="lg"
            />
            <Badge status={statusLabel} />
          </div>
          <h1 className="font-body text-lg text-brand-dark-gray">
            {formatAddress(listing.address)}
          </h1>
          {listing.address.neighborhood && (
            <p className="font-body text-sm text-brand-medium-gray mt-1">
              {listing.address.neighborhood}
              {listing.address.district && ` · ${listing.address.district}`}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">
              MLS# {listing.mlsNumber}
            </p>
            {listing.daysOnMarket && Number(listing.daysOnMarket) > 0 && (
              <p className="font-body text-xs text-brand-medium-gray mt-1">
                {listing.daysOnMarket} days on market
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Key Stats Row */}
      <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-brand-light-gray">
        {listing.details?.numBedrooms && Number(listing.details.numBedrooms) > 0 && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <div>
              <p className="font-heading text-xl text-brand-dark-gray">{listing.details.numBedrooms}</p>
              <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">Beds</p>
            </div>
          </div>
        )}

        {listing.details?.numBathrooms && Number(listing.details.numBathrooms) > 0 && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-heading text-xl text-brand-dark-gray">
                {listing.details.numBathrooms}
                {listing.details.numBathroomsHalf && Number(listing.details.numBathroomsHalf) > 0 && (
                  <span className="text-sm text-brand-medium-gray">.{listing.details.numBathroomsHalf}</span>
                )}
              </p>
              <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">Baths</p>
            </div>
          </div>
        )}

        {listing.details?.sqft && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
            <div>
              <p className="font-heading text-xl text-brand-dark-gray">{listing.details.sqft}</p>
              <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">Sq Ft</p>
            </div>
          </div>
        )}

        {listing.details?.yearBuilt && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <div>
              <p className="font-heading text-xl text-brand-dark-gray">{listing.details.yearBuilt}</p>
              <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">Year Built</p>
            </div>
          </div>
        )}

        {listing.details?.propertyType && (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>
            <div>
              <p className="font-heading text-lg text-brand-dark-gray">{listing.details.propertyType}</p>
              <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wider">Type</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
