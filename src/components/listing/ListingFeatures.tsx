import type { Listing } from '@/types/listing';

interface ListingFeaturesProps {
  listing: Listing;
}

export default function ListingFeatures({ listing }: ListingFeaturesProps) {
  const details = listing.details;
  if (!details) return null;

  const features: { label: string; value: string | undefined }[] = [
    { label: 'Property Type', value: details.propertyType },
    { label: 'Style', value: details.style },
    { label: 'Heating', value: details.heating },
    { label: 'Air Conditioning', value: details.airConditioning },
    { label: 'Basement', value: details.basement1 },
    { label: 'Garage', value: details.garage },
    { label: 'Driveway', value: details.driveway },
    { label: 'Swimming Pool', value: details.swimmingPool },
    { label: 'Exterior', value: details.exteriorConstruction1 },
    { label: 'Den', value: details.den === 'Y' ? 'Yes' : details.den === 'N' ? 'No' : details.den },
    { label: 'Patio', value: details.patio },
  ];

  const activeFeatures = features.filter(
    (f) => f.value && f.value !== 'None' && f.value !== 'N/A' && f.value !== ''
  );

  if (activeFeatures.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="font-heading text-2xl text-brand-dark-gray mb-4">Property Features</h2>
      <div className="w-12 h-px bg-brand-black mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activeFeatures.map((feature) => (
          <div
            key={feature.label}
            className="flex justify-between items-center py-3 border-b border-brand-light-gray/50"
          >
            <span className="font-body text-sm text-brand-medium-gray">{feature.label}</span>
            <span className="font-body text-sm font-medium text-brand-dark-gray">{feature.value}</span>
          </div>
        ))}
      </div>

      {/* Lot Info */}
      {listing.lot && (listing.lot.acres || listing.lot.depth || listing.lot.width) && (
        <div className="mt-6">
          <h3 className="font-heading text-lg text-brand-dark-gray mb-3">Lot Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {listing.lot.acres && (
              <div className="flex justify-between items-center py-3 border-b border-brand-light-gray/50">
                <span className="font-body text-sm text-brand-medium-gray">Lot Size</span>
                <span className="font-body text-sm font-medium text-brand-dark-gray">{listing.lot.acres} acres</span>
              </div>
            )}
            {listing.lot.depth && listing.lot.width && (
              <div className="flex justify-between items-center py-3 border-b border-brand-light-gray/50">
                <span className="font-body text-sm text-brand-medium-gray">Dimensions</span>
                <span className="font-body text-sm font-medium text-brand-dark-gray">
                  {listing.lot.width} x {listing.lot.depth} ft
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tax Info */}
      {listing.taxes?.annualAmount && (
        <div className="mt-6">
          <h3 className="font-heading text-lg text-brand-dark-gray mb-3">Tax Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-between items-center py-3 border-b border-brand-light-gray/50">
              <span className="font-body text-sm text-brand-medium-gray">Annual Taxes</span>
              <span className="font-body text-sm font-medium text-brand-dark-gray">
                ${Number(listing.taxes.annualAmount).toLocaleString()}
              </span>
            </div>
            {listing.taxes.assessmentYear && (
              <div className="flex justify-between items-center py-3 border-b border-brand-light-gray/50">
                <span className="font-body text-sm text-brand-medium-gray">Assessment Year</span>
                <span className="font-body text-sm font-medium text-brand-dark-gray">
                  {listing.taxes.assessmentYear}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
