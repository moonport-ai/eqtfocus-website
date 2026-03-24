"use client";

import { useSearchFilters } from "@/hooks/useSearchFilters";
import { Button } from "@/components/ui/Button";

export function NoResults() {
  const { clearAllFilters } = useSearchFilters();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* House Icon */}
      <svg
        className="h-20 w-20 text-brand-light-gray mb-6"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 8l-6 6M9 8l6 6"
        />
      </svg>

      <h3 className="font-heading text-2xl text-brand-dark-gray">
        No properties found
      </h3>
      <p className="font-body text-brand-medium-gray mt-2 max-w-md">
        We could not find any properties matching your current filters.
        Try adjusting your search criteria or clearing all filters.
      </p>

      <div className="mt-6">
        <Button variant="outline" onClick={clearAllFilters}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
