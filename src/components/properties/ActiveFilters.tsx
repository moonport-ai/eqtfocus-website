"use client";

import { useMemo } from "react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import { formatPrice, cn } from "@/lib/utils";
import {
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
  PROPERTY_TYPES,
  SERVICE_AREAS,
} from "@/lib/constants";

interface ActiveFilter {
  key: string;
  label: string;
  displayValue: string;
}

function getFilterDisplayLabel(key: string, value: string): ActiveFilter | null {
  switch (key) {
    case "area":
      return {
        key,
        label: "Area",
        displayValue: value,
      };
    case "minPrice":
      return {
        key,
        label: "Min Price",
        displayValue: formatPrice(value),
      };
    case "maxPrice":
      return {
        key,
        label: "Max Price",
        displayValue: formatPrice(value),
      };
    case "minBedrooms": {
      const option = BEDROOM_OPTIONS.find((o) => o.value === value);
      return {
        key,
        label: "Bedrooms",
        displayValue: option ? option.label : `${value}+ Beds`,
      };
    }
    case "minBaths": {
      const option = BATHROOM_OPTIONS.find((o) => o.value === value);
      return {
        key,
        label: "Bathrooms",
        displayValue: option ? option.label : `${value}+ Baths`,
      };
    }
    case "propertyType": {
      const option = PROPERTY_TYPES.find((o) => o.value === value);
      return {
        key,
        label: "Type",
        displayValue: option ? option.label : value,
      };
    }
    default:
      return null;
  }
}

const FILTER_KEYS = ["area", "minPrice", "maxPrice", "minBedrooms", "minBaths", "propertyType"];

export function ActiveFilters() {
  const { getParam, updateParam, clearAllFilters } = useSearchFilters();

  const activeFilters = useMemo(() => {
    const filters: ActiveFilter[] = [];
    for (const key of FILTER_KEYS) {
      const value = getParam(key);
      if (value) {
        const filter = getFilterDisplayLabel(key, value);
        if (filter) filters.push(filter);
      }
    }
    return filters;
  }, [getParam]);

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {activeFilters.map((filter) => (
        <span
          key={filter.key}
          className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-light-gray px-3 py-1.5 font-body text-xs text-brand-dark-gray"
        >
          <span className="text-brand-medium-gray">{filter.label}:</span>{" "}
          {filter.displayValue}
          <button
            type="button"
            onClick={() => updateParam(filter.key, "")}
            className="ml-0.5 inline-flex items-center justify-center h-4 w-4 rounded-full text-brand-medium-gray hover:text-brand-dark-gray hover:bg-brand-light-gray transition-colors"
            aria-label={`Remove ${filter.label} filter`}
          >
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </span>
      ))}

      <button
        type="button"
        onClick={clearAllFilters}
        className="font-body text-xs text-brand-black hover:text-brand-black transition-colors underline underline-offset-2"
      >
        Clear All
      </button>
    </div>
  );
}
