'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface ListingMapProps {
  latitude: number;
  longitude: number;
  address: string;
}

function MapPlaceholder() {
  return (
    <div className="aspect-[16/9] bg-white rounded-lg flex items-center justify-center">
      <p className="font-body text-sm text-brand-medium-gray">Loading map...</p>
    </div>
  );
}

function MapContent({ latitude, longitude, address }: ListingMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <MapPlaceholder />;

  // Dynamic import of Leaflet components to avoid SSR issues
  const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
  );
  const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
  );
  const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
  );
  const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
  );

  return (
    <div className="aspect-[16/9] rounded-lg overflow-hidden">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            <span className="font-body text-sm">{address}</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default function ListingMap({ latitude, longitude, address }: ListingMapProps) {
  if (!latitude || !longitude) return null;

  return (
    <div className="mt-8">
      <h2 className="font-heading text-2xl text-brand-dark-gray mb-4">Location</h2>
      <div className="w-12 h-px bg-brand-black mb-6" />
      <MapContent latitude={latitude} longitude={longitude} address={address} />
    </div>
  );
}
