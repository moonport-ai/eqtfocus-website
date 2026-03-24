"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LOCATION_OPTIONS = [
  { label: "All Areas", value: "" },
  { label: "Essex County", value: "Essex" },
  { label: "Union County", value: "Union" },
  { label: "Bergen County", value: "Bergen" },
];

const PRICE_OPTIONS = [
  { label: "Any Price", value: "" },
  { label: "Under $500K", value: "0-500000" },
  { label: "$500K - $1M", value: "500000-1000000" },
  { label: "$1M - $2M", value: "1000000-2000000" },
  { label: "$2M - $5M", value: "2000000-5000000" },
  { label: "$5M+", value: "5000000-" },
];

const BEDROOM_OPTIONS = [
  { label: "Any Beds", value: "" },
  { label: "1+", value: "1" },
  { label: "2+", value: "2" },
  { label: "3+", value: "3" },
  { label: "4+", value: "4" },
  { label: "5+", value: "5" },
];

export function HeroSearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();

    if (location) {
      params.set("area", location);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      if (min) params.set("minPrice", min);
      if (max) params.set("maxPrice", max);
    }

    if (bedrooms) {
      params.set("minBedrooms", bedrooms);
    }

    const queryString = params.toString();
    router.push(`/properties${queryString ? `?${queryString}` : ""}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-4 sm:p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div className="flex flex-col text-left">
          <label className="text-white/80 text-xs uppercase tracking-[0.15em] mb-2 font-body ml-1">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-white/95 border-0 text-brand-black rounded-xl px-4 py-3.5 font-body text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white transition-colors appearance-none cursor-pointer"
          >
            {LOCATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col text-left">
          <label className="text-white/80 text-xs uppercase tracking-[0.15em] mb-2 font-body ml-1">
            Price Range
          </label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="bg-white/95 border-0 text-brand-black rounded-xl px-4 py-3.5 font-body text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white transition-colors appearance-none cursor-pointer"
          >
            {PRICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col text-left">
          <label className="text-white/80 text-xs uppercase tracking-[0.15em] mb-2 font-body ml-1">
            Bedrooms
          </label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="bg-white/95 border-0 text-brand-black rounded-xl px-4 py-3.5 font-body text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50 hover:bg-white transition-colors appearance-none cursor-pointer"
          >
            {BEDROOM_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="flex flex-col justify-end">
          <button
            type="submit"
            className="bg-brand-black text-white font-body font-medium text-sm tracking-widest uppercase px-6 py-3.5 rounded-xl hover:bg-brand-dark-gray transition-all shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/30 w-full"
          >
            Search Properties
          </button>
        </div>
      </div>
    </form>
  );
}
