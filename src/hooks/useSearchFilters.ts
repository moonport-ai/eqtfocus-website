"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

/**
 * Hook for managing search filter state via URL search parameters.
 * Provides methods to update, read, and clear filter parameters.
 */
export function useSearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  /**
   * Updates a single URL search parameter.
   * Resets pageNum to 1 when changing any other filter.
   */
  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      // Reset to page 1 when changing a filter (not pagination itself)
      if (key !== "pageNum") {
        params.delete("pageNum");
      }

      const queryString = params.toString();
      const url = queryString ? `${pathname}?${queryString}` : pathname;
      router.push(url, { scroll: false });
    },
    [searchParams, pathname, router],
  );

  /**
   * Clears all filter parameters, resetting the URL to the pathname only.
   */
  const clearAllFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [pathname, router]);

  /**
   * Reads a single parameter value from the current URL search params.
   */
  const getParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams],
  );

  return {
    updateParam,
    clearAllFilters,
    getParam,
    searchParams,
  };
}
