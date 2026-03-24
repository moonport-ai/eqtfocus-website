"use client";

import { useState, Suspense } from "react";
import { MapSearchView } from "./MapSearchView";
import { PropertyGrid } from "./PropertyGrid";
import { Pagination } from "./Pagination";
import { SortDropdown } from "./SortDropdown";
import { Skeleton } from "@/components/ui/Skeleton";
import type { Listing } from "@/types/listing";

interface PropertiesViewToggleProps {
  listings: Listing[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export function PropertiesViewToggle({
  listings,
  totalCount,
  currentPage,
  totalPages,
}: PropertiesViewToggleProps) {
  const [view, setView] = useState<"grid" | "map">("grid");

  return (
    <>
      {/* Results Count + Sort + Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <p className="font-body text-sm text-brand-medium-gray">
          <span className="font-medium text-brand-dark-gray">
            {totalCount}
          </span>{" "}
          {totalCount === 1 ? "property" : "properties"} found
        </p>

        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="flex items-center border border-brand-light-gray/50 rounded-lg overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`flex items-center gap-2 px-4 py-2.5 font-body text-xs uppercase tracking-wider transition-all duration-200 ${
                view === "grid"
                  ? "bg-brand-black text-white"
                  : "bg-white text-brand-dark-gray hover:bg-brand-light-gray/20"
              }`}
              aria-label="Grid view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
              </svg>
              Grid
            </button>
            <button
              onClick={() => setView("map")}
              className={`flex items-center gap-2 px-4 py-2.5 font-body text-xs uppercase tracking-wider transition-all duration-200 ${
                view === "map"
                  ? "bg-brand-black text-white"
                  : "bg-white text-brand-dark-gray hover:bg-brand-light-gray/20"
              }`}
              aria-label="Map view"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Map
            </button>
          </div>

          {view === "grid" && (
            <Suspense fallback={<Skeleton className="h-10 w-48" />}>
              <SortDropdown />
            </Suspense>
          )}
        </div>
      </div>

      {/* Content */}
      {view === "grid" ? (
        <>
          <PropertyGrid listings={listings} />
          <Suspense fallback={null}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalCount={totalCount}
            />
          </Suspense>
        </>
      ) : (
        <MapSearchView />
      )}
    </>
  );
}
