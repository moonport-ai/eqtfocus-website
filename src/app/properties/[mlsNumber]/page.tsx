import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import ImageGallery from '@/components/listing/ImageGallery';
import ListingHeader from '@/components/listing/ListingHeader';
import ListingDescription from '@/components/listing/ListingDescription';
import ListingFeatures from '@/components/listing/ListingFeatures';
import ListingMap from '@/components/listing/ListingMap';
import AgentContactCard from '@/components/listing/AgentContactCard';
import MortgageCalculator from '@/components/listing/MortgageCalculator';
import MobileCtaBar from '@/components/listing/MobileCtaBar';
import SimilarListings from '@/components/listing/SimilarListings';
import { formatPrice, formatAddress } from '@/lib/utils';
import type { Listing } from '@/types/listing';

interface Props {
  params: Promise<{ mlsNumber: string }>;
}

async function fetchListing(mlsNumber: string): Promise<Listing | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/listings/${mlsNumber}`, {
      next: { revalidate: 1800 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mlsNumber } = await params;
  const listing = await fetchListing(mlsNumber);

  if (!listing) {
    return { title: 'Property Not Found' };
  }

  const address = formatAddress(listing.address);
  const price = formatPrice(listing.listPrice);

  return {
    title: `${address} - ${price}`,
    description: `${listing.details?.numBedrooms || 0} bed, ${listing.details?.numBathrooms || 0} bath ${listing.details?.propertyType || 'property'} in ${listing.address.city}, NJ. Listed at ${price}.`,
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const { mlsNumber } = await params;
  const listing = await fetchListing(mlsNumber);

  if (!listing) {
    notFound();
  }

  const address = formatAddress(listing.address);

  return (
    <div className="pt-24 pb-16 bg-white">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-6 font-body text-sm text-brand-medium-gray">
          <a href="/" className="hover:text-brand-black transition-colors">Home</a>
          <span className="mx-2">/</span>
          <a href="/properties" className="hover:text-brand-black transition-colors">Properties</a>
          <span className="mx-2">/</span>
          <span className="text-brand-dark-gray">{address}</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Left Column - Main Content */}
          <div className="flex-1 min-w-0">
            <MobileCtaBar propertyMls={listing.mlsNumber} />
            <ImageGallery
              images={listing.images || []}
              address={address}
            />

            <ListingHeader listing={listing} />

            {listing.details?.description && (
              <ListingDescription description={listing.details.description} />
            )}

            <ListingFeatures listing={listing} />

            {/* Room Breakdown */}
            {listing.rooms && listing.rooms.length > 0 && (
              <div className="mt-8">
                <h2 className="font-heading text-2xl text-brand-dark-gray mb-4">Room Details</h2>
                <div className="w-12 h-px bg-brand-black mb-6" />
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-brand-light-gray">
                        <th className="text-left font-body text-xs uppercase tracking-wider text-brand-medium-gray py-3 pr-4">Room</th>
                        <th className="text-left font-body text-xs uppercase tracking-wider text-brand-medium-gray py-3 pr-4">Level</th>
                        <th className="text-left font-body text-xs uppercase tracking-wider text-brand-medium-gray py-3 pr-4">Dimensions</th>
                        <th className="text-left font-body text-xs uppercase tracking-wider text-brand-medium-gray py-3">Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listing.rooms.map((room, index) => (
                        <tr key={index} className="border-b border-brand-light-gray/50">
                          <td className="font-body text-sm text-brand-dark-gray py-3 pr-4">{room.description}</td>
                          <td className="font-body text-sm text-brand-medium-gray py-3 pr-4">{room.level}</td>
                          <td className="font-body text-sm text-brand-medium-gray py-3 pr-4">
                            {room.length && room.width ? `${room.length} x ${room.width}` : '-'}
                          </td>
                          <td className="font-body text-sm text-brand-medium-gray py-3">
                            {[room.features, room.features2, room.features3].filter(Boolean).join(', ') || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {listing.map?.latitude && listing.map?.longitude && (
              <ListingMap
                latitude={listing.map.latitude}
                longitude={listing.map.longitude}
                address={address}
              />
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-80 xl:w-96 mt-8 lg:mt-0 flex-shrink-0">
            <AgentContactCard propertyMls={listing.mlsNumber} />
            <MortgageCalculator listPrice={listing.listPrice} />
          </div>
        </div>

        {/* Similar Listings - Full Width */}
        <SimilarListings mlsNumber={listing.mlsNumber} />

        {/* Listing Info Footer */}
        <div className="mt-12 pt-8 border-t border-brand-light-gray">
          <div className="flex flex-wrap gap-6 font-body text-xs text-brand-medium-gray">
            <p>MLS# {listing.mlsNumber}</p>
            {listing.office?.brokerageName && <p>Listed by {listing.office.brokerageName}</p>}
            {listing.listDate && (
              <p>Listed on {new Date(listing.listDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            )}
            {listing.timestamps?.listingUpdated && (
              <p>Updated {new Date(listing.timestamps.listingUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            )}
          </div>
          <p className="font-body text-xs text-brand-medium-gray/70 mt-4">
            The data relating to real estate for sale on this website comes in part from the Internet Data Exchange (IDX) program.
            Information is deemed reliable but not guaranteed. All properties are subject to prior sale, change or withdrawal.
          </p>
        </div>
      </Container>
    </div>
  );
}
