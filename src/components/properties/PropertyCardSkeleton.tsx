import { Skeleton } from "@/components/ui/Skeleton";

interface PropertyCardSkeletonProps {
  count?: number;
}

function SingleCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-brand-light-gray/50">
      {/* Image area */}
      <Skeleton className="aspect-[4/3] w-full rounded-none" />

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <Skeleton className="h-8 w-36" />

        {/* Address */}
        <Skeleton className="h-4 w-56 mt-2" />

        {/* Details Row */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-brand-light-gray/50">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

export function PropertyCardSkeleton({ count = 6 }: PropertyCardSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SingleCardSkeleton key={i} />
      ))}
    </div>
  );
}
