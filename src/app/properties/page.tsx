import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SearchFilters } from "@/components/properties/SearchFilters";
import { ActiveFilters } from "@/components/properties/ActiveFilters";
import { PropertiesViewToggle } from "@/components/properties/PropertiesViewToggle";
import { PropertyCardSkeleton } from "@/components/properties/PropertyCardSkeleton";
import { Skeleton } from "@/components/ui/Skeleton";
import type { SearchResponse } from "@/types/search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | EQT Focus",
  description:
    "Browse luxury real estate listings in New Jersey. Filter by location, price, bedrooms, and more.",
};

interface PropertiesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

async function fetchListings(
  searchParams: Record<string, string | string[] | undefined>,
): Promise<SearchResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const params = new URLSearchParams();
  const allowedKeys = [
    "area",
    "city",
    "minPrice",
    "maxPrice",
    "minBedrooms",
    "minBaths",
    "propertyType",
    "status",
    "search",
    "sortBy",
    "pageNum",
    "resultsPerPage",
  ];

  for (const key of allowedKeys) {
    const value = searchParams[key];
    if (value && typeof value === "string") {
      params.set(key, value);
    }
  }

  const response = await fetch(`${baseUrl}/api/listings?${params.toString()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch listings: ${response.status}`);
  }

  return response.json();
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const resolvedParams = await searchParams;

  let data: SearchResponse | null = null;
  let error: string | null = null;

  try {
    data = await fetchListings(resolvedParams);
  } catch (err) {
    console.error("Properties page fetch error:", err);
    error =
      err instanceof Error ? err.message : "An unexpected error occurred";
  }

  const currentPage = data?.page ?? 1;
  const totalPages = data?.numPages ?? 1;
  const totalCount = data?.count ?? 0;
  const listings = data?.listings ?? [];

  return (
    <main className="min-h-screen bg-white/30 pt-24 pb-16">
      <Container>
        {/* Page Header */}
        <div className="mb-8">
          <SectionHeading
            title="Properties"
            subtitle="Explore our curated collection of luxury properties across New Jersey's most desirable neighborhoods."
          />
        </div>

        {/* Search Filters */}
        <div className="mb-6">
          <Suspense
            fallback={
              <div className="bg-white rounded-lg border border-brand-light-gray/50 p-4 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-11 w-full" />
                  ))}
                </div>
              </div>
            }
          >
            <SearchFilters />
          </Suspense>
        </div>

        {/* Active Filters */}
        <Suspense fallback={null}>
          <div className="mb-6">
            <ActiveFilters />
          </div>
        </Suspense>

        {/* Error State */}
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
            <h3 className="font-heading text-xl text-red-800">
              Something went wrong
            </h3>
            <p className="font-body text-sm text-red-600 mt-2">
              We were unable to load properties at this time. Please try again
              later.
            </p>
          </div>
        ) : (
            <PropertiesViewToggle
              listings={listings}
              totalCount={totalCount}
              currentPage={currentPage}
              totalPages={totalPages}
            />
        )}
      </Container>
    </main>
  );
}
