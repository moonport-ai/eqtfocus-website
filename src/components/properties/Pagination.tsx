"use client";

import { useMemo } from "react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

/**
 * Builds an array of page numbers and ellipsis markers for display.
 * For example: [1, '...', 4, 5, 6, '...', 10]
 */
function getPageNumbers(
  current: number,
  total: number,
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [];

  // Always show first page
  pages.push(1);

  if (current > 3) {
    pages.push("...");
  }

  // Pages around current
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  // Always show last page
  pages.push(total);

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  totalCount,
}: PaginationProps) {
  const { updateParam } = useSearchFilters();

  const pageNumbers = useMemo(
    () => getPageNumbers(currentPage, totalPages),
    [currentPage, totalPages],
  );

  if (totalPages <= 1) return null;

  const resultsPerPage = 12;
  const startItem = (currentPage - 1) * resultsPerPage + 1;
  const endItem = Math.min(currentPage * resultsPerPage, totalCount);

  const goToPage = (page: number) => {
    updateParam("pageNum", page.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
      {/* Showing X-Y of Z */}
      <p className="font-body text-sm text-brand-medium-gray">
        Showing{" "}
        <span className="font-medium text-brand-dark-gray">
          {startItem}&ndash;{endItem}
        </span>{" "}
        of{" "}
        <span className="font-medium text-brand-dark-gray">{totalCount}</span>{" "}
        properties
      </p>

      {/* Page Navigation */}
      <nav className="flex items-center gap-1" aria-label="Pagination">
        {/* Previous */}
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
          className={cn(
            "flex items-center justify-center h-10 w-10 rounded border font-body text-sm transition-colors duration-200",
            currentPage <= 1
              ? "border-brand-light-gray text-brand-light-gray cursor-not-allowed"
              : "border-brand-light-gray text-brand-dark-gray hover:border-brand-black hover:text-brand-black",
          )}
          aria-label="Previous page"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="flex items-center justify-center h-10 w-10 font-body text-sm text-brand-medium-gray"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              className={cn(
                "flex items-center justify-center h-10 w-10 rounded border font-body text-sm transition-colors duration-200",
                page === currentPage
                  ? "border-brand-black bg-brand-black text-white"
                  : "border-brand-light-gray text-brand-dark-gray hover:border-brand-black hover:text-brand-black",
              )}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={cn(
            "flex items-center justify-center h-10 w-10 rounded border font-body text-sm transition-colors duration-200",
            currentPage >= totalPages
              ? "border-brand-light-gray text-brand-light-gray cursor-not-allowed"
              : "border-brand-light-gray text-brand-dark-gray hover:border-brand-black hover:text-brand-black",
          )}
          aria-label="Next page"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
