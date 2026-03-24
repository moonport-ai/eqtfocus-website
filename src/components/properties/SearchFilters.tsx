"use client";

import { useState, useMemo } from "react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import {
  SERVICE_AREAS,
  PRICE_RANGES,
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
  PROPERTY_TYPES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const locationOptions = [
  { label: "All Areas", value: "" },
  ...SERVICE_AREAS.map((area) => ({ label: area, value: area })),
];

export function SearchFilters() {
  const { updateParam, getParam, clearAllFilters } = useSearchFilters();
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (getParam("area")) count++;
    if (getParam("minPrice")) count++;
    if (getParam("maxPrice")) count++;
    if (getParam("minBedrooms")) count++;
    if (getParam("minBaths")) count++;
    if (getParam("propertyType")) count++;
    return count;
  }, [getParam]);

  const hasActiveFilters = activeFilterCount > 0;

  return (
    <div className="bg-white rounded-lg border border-brand-light-gray/50 p-4 sm:p-6">
      {/* Mobile Toggle */}
      <div className="flex items-center justify-between sm:hidden">
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 font-body text-sm font-medium text-brand-dark-gray"
        >
          <svg
            className="h-5 w-5 text-brand-medium-gray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filters
          {hasActiveFilters && (
            <span className="ml-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-brand-black text-white text-xs font-medium">
              {activeFilterCount}
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearAllFilters}
            className="font-body text-xs text-brand-black hover:text-brand-black transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter Controls */}
      <div
        className={cn(
          "gap-3 sm:gap-4",
          "sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7",
          !showFilters && "hidden sm:grid",
          showFilters && "grid mt-4 sm:mt-0",
        )}
      >
        {/* Location */}
        <Select
          options={[...locationOptions]}
          value={getParam("area") || ""}
          onChange={(e) => updateParam("area", e.target.value)}
          aria-label="Location"
          className="py-2.5 text-xs"
        />

        {/* Min Price */}
        <Select
          options={[...PRICE_RANGES].map((r) => ({
            ...r,
            label: r.value ? `Min: ${r.label.replace("+", "")}` : "Min Price",
          }))}
          value={getParam("minPrice") || ""}
          onChange={(e) => updateParam("minPrice", e.target.value)}
          aria-label="Minimum price"
          className="py-2.5 text-xs"
        />

        {/* Max Price */}
        <Select
          options={[...PRICE_RANGES].map((r) => ({
            ...r,
            label: r.value ? `Max: ${r.label.replace("+", "")}` : "Max Price",
          }))}
          value={getParam("maxPrice") || ""}
          onChange={(e) => updateParam("maxPrice", e.target.value)}
          aria-label="Maximum price"
          className="py-2.5 text-xs"
        />

        {/* Bedrooms */}
        <Select
          options={[...BEDROOM_OPTIONS]}
          value={getParam("minBedrooms") || ""}
          onChange={(e) => updateParam("minBedrooms", e.target.value)}
          aria-label="Bedrooms"
          className="py-2.5 text-xs"
        />

        {/* Bathrooms */}
        <Select
          options={[...BATHROOM_OPTIONS]}
          value={getParam("minBaths") || ""}
          onChange={(e) => updateParam("minBaths", e.target.value)}
          aria-label="Bathrooms"
          className="py-2.5 text-xs"
        />

        {/* Property Type */}
        <Select
          options={[...PROPERTY_TYPES]}
          value={getParam("propertyType") || ""}
          onChange={(e) => updateParam("propertyType", e.target.value)}
          aria-label="Property type"
          className="py-2.5 text-xs"
        />

        {/* Clear Filters (desktop) */}
        {hasActiveFilters && (
          <div className="hidden sm:flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              className="w-full whitespace-nowrap"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
