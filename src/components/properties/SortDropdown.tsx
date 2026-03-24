"use client";

import { useSearchFilters } from "@/hooks/useSearchFilters";
import { SORT_OPTIONS } from "@/lib/constants";

export function SortDropdown() {
  const { updateParam, getParam } = useSearchFilters();

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort-select"
        className="font-body text-sm text-brand-medium-gray whitespace-nowrap"
      >
        Sort by:
      </label>
      <div className="relative">
        <select
          id="sort-select"
          value={getParam("sortBy") || SORT_OPTIONS[0].value}
          onChange={(e) => updateParam("sortBy", e.target.value)}
          className="appearance-none rounded border border-brand-light-gray bg-white px-3 py-2 pr-8 font-body text-sm text-brand-dark-gray transition-colors duration-200 focus:border-brand-black focus:ring-1 focus:ring-brand-black focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-4 w-4 text-brand-medium-gray"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
