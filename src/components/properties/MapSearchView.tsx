"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import {
  formatPrice,
  formatAddress,
  getListingImageUrl,
} from "@/lib/utils";
import type { Listing } from "@/types/listing";
import type { SearchResponse } from "@/types/search";

// ── Leaflet dynamic imports at MODULE level ────────────────────────────────
// They MUST live outside any component function. Re-creating dynamic() on
// every render causes Leaflet to lose its internal pane DOM references,
// which produces the "Cannot read properties of undefined ('_leaflet_pos')"
// error during zoom transitions.
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((m) => m.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((m) => m.Popup),
  { ssr: false }
);

// Default center: Northern New Jersey
const DEFAULT_CENTER: [number, number] = [40.7862, -74.2279];
const DEFAULT_ZOOM = 11;

function MapSearchPlaceholder() {
  return (
    <div className="flex h-[calc(100vh-220px)] gap-0 rounded-lg overflow-hidden border border-brand-light-gray/50">
      <div className="w-1/2 bg-brand-light-gray/20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <svg
            className="h-10 w-10 text-brand-medium-gray/40 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <p className="font-body text-sm text-brand-medium-gray">
            Loading map...
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-white p-4">
        <div className="animate-pulse space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-brand-light-gray/30 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Component that lives inside MapContainer to access map events.
// Uses a static import of useMapEvents instead of require() to avoid
// stale closures and to play nicely with React's rules of hooks.
const MapEventHandler = dynamic(
  () =>
    import("react-leaflet").then((mod) => {
      const { useMapEvents } = mod;
      function Handler({
        onBoundsChange,
      }: {
        onBoundsChange: (polygon: number[][][]) => void;
      }) {
        useMapEvents({
          moveend: (e: any) => {
            const map = e.target;
            if (!map._loaded) return; // guard: skip if map not fully initialised
            const bounds = map.getBounds();
            const sw = bounds.getSouthWest();
            const ne = bounds.getNorthEast();
            const nw = { lat: ne.lat, lng: sw.lng };
            const se = { lat: sw.lat, lng: ne.lng };

            const polygon: number[][] = [
              [sw.lng, sw.lat],
              [se.lng, se.lat],
              [ne.lng, ne.lat],
              [nw.lng, nw.lat],
              [sw.lng, sw.lat],
            ];
            onBoundsChange([polygon]);
          },
        });
        return null;
      }
      return Handler;
    }),
  { ssr: false }
);

function ListingPopupContent({ listing }: { listing: Listing }) {
  const address = formatAddress(listing.address);
  const beds = listing.details?.numBedrooms || "0";
  const baths = listing.details?.numBathrooms || "0";

  return (
    <div className="min-w-[200px]">
      <Link
        href={`/properties/${listing.mlsNumber}`}
        className="block hover:opacity-80 transition-opacity"
      >
        <p className="font-heading text-base text-brand-black mb-1">
          {formatPrice(listing.listPrice)}
        </p>
        <p className="font-body text-xs text-brand-medium-gray truncate mb-2">
          {address}
        </p>
        <div className="flex items-center gap-3 text-xs font-body text-brand-dark-gray">
          <span>{beds} Beds</span>
          <span className="text-brand-light-gray">|</span>
          <span>{baths} Baths</span>
        </div>
      </Link>
    </div>
  );
}

// Compact property card for the sidebar
function MapListingCard({ listing }: { listing: Listing }) {
  const imageUrl = listing.images?.[0]
    ? getListingImageUrl(listing.images[0])
    : "";
  const address = formatAddress(listing.address);
  const beds = listing.details?.numBedrooms || "0";
  const baths = listing.details?.numBathrooms || "0";

  return (
    <Link
      href={`/properties/${listing.mlsNumber}`}
      className="group flex gap-4 p-3 rounded-lg border border-brand-light-gray/30 bg-white hover:shadow-md hover:border-brand-light-gray transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className="relative w-28 h-24 flex-shrink-0 rounded-md overflow-hidden bg-brand-light-gray/20">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={address || "Property"}
            fill
            sizes="112px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="h-8 w-8 text-brand-medium-gray/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <p className="font-heading text-lg text-brand-black leading-tight">
          {formatPrice(listing.listPrice)}
        </p>
        <p className="font-body text-xs text-brand-medium-gray mt-1 truncate">
          {address}
        </p>
        <div className="flex items-center gap-3 mt-2 text-xs font-body text-brand-dark-gray">
          <span>{beds} Beds</span>
          <span className="text-brand-light-gray">·</span>
          <span>{baths} Baths</span>
        </div>
      </div>
    </Link>
  );
}

function MapContent() {
  const searchParams = useSearchParams();
  const [listings, setListings] = useState<Listing[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);


  const fetchListingsForBounds = useCallback(
    async (polygon: number[][][]) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        const filterKeys = [
          "area",
          "city",
          "minPrice",
          "maxPrice",
          "minBedrooms",
          "minBaths",
          "propertyType",
          "status",
          "sortBy",
        ];

        filterKeys.forEach((key) => {
          const value = searchParams.get(key);
          if (value) params.set(key, value);
        });

        params.set("resultsPerPage", "50");

        const response = await fetch(
          `/api/listings?${params.toString()}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ map: polygon }),
          }
        );

        if (response.ok) {
          const data: SearchResponse = await response.json();
          setListings(data.listings ?? []);
          setTotalCount(data.count ?? 0);
        }
      } catch (err) {
        console.error("Map search error:", err);
      } finally {
        setLoading(false);
      }
    },
    [searchParams]
  );

  const handleBoundsChange = useCallback(
    (polygon: number[][][]) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchListingsForBounds(polygon);
      }, 600);
    },
    [fetchListingsForBounds]
  );

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-220px)] rounded-lg overflow-hidden border border-brand-light-gray/50">
      {/* Map Panel */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full">
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />

        {/* Loading indicator */}
        {loading && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-brand-black/90 text-white font-body text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg backdrop-blur-sm">
            Searching area...
          </div>
        )}

        <MapContainer
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom={true}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <MapEventHandler onBoundsChange={handleBoundsChange} />
          {listings
            .filter((l) => l.map?.latitude && l.map?.longitude)
            .map((listing) => (
              <Marker
                key={listing.mlsNumber}
                position={[
                  Number(listing.map.latitude),
                  Number(listing.map.longitude),
                ]}
              >
                <Popup>
                  <ListingPopupContent listing={listing} />
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>

      {/* Listings Panel */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col bg-white border-t lg:border-t-0 lg:border-l border-brand-light-gray/50">
        {/* Header */}
        <div className="flex-shrink-0 px-5 py-4 border-b border-brand-light-gray/30">
          <p className="font-body text-sm text-brand-medium-gray">
            <span className="font-medium text-brand-black">{totalCount}</span>{" "}
            {totalCount === 1 ? "listing" : "listings"} found in this area
          </p>
        </div>

        {/* Scrollable listing cards */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {listings.length === 0 && !loading ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                className="h-12 w-12 text-brand-medium-gray/20 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="font-body text-sm text-brand-medium-gray">
                Pan or zoom the map to search this area
              </p>
            </div>
          ) : (
            listings.map((listing) => (
              <MapListingCard key={listing.mlsNumber} listing={listing} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export function MapSearchView() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <MapSearchPlaceholder />;

  return <MapContent />;
}
