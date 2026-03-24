import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";
import { PropertyCardSkeleton } from "@/components/properties/PropertyCardSkeleton";

export default function PropertiesLoading() {
  return (
    <main className="min-h-screen bg-white/30 pt-24 pb-16">
      <Container>
        {/* Page Header Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-96 mt-4" />
          <Skeleton className="h-0.5 w-[60px] mt-4" />
        </div>

        {/* Search Filters Skeleton */}
        <div className="bg-white rounded-lg border border-brand-light-gray/50 p-4 sm:p-6 mb-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-11 w-full" />
            ))}
          </div>
        </div>

        {/* Results Count + Sort Skeleton */}
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-10 w-48" />
        </div>

        {/* Property Grid Skeleton */}
        <PropertyCardSkeleton count={6} />
      </Container>
    </main>
  );
}
