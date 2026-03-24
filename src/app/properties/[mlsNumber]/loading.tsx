import { Container, Skeleton } from '@/components/ui';

export default function ListingDetailLoading() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <Container>
        {/* Breadcrumb skeleton */}
        <Skeleton className="h-4 w-64 mb-6" />

        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <Skeleton className="aspect-[16/10] w-full rounded-lg" />

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="w-20 h-16 rounded-md flex-shrink-0" />
              ))}
            </div>

            {/* Header */}
            <div className="mt-6">
              <Skeleton className="h-10 w-48 mb-2" />
              <Skeleton className="h-5 w-72 mb-1" />
              <Skeleton className="h-4 w-40" />
            </div>

            {/* Stats row */}
            <div className="flex gap-6 mt-6 pt-6 border-t border-brand-light-gray">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded" />
                  <div>
                    <Skeleton className="h-6 w-10 mb-1" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <Skeleton className="h-7 w-32 mb-4" />
              <Skeleton className="h-px w-12 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 xl:w-96 mt-8 lg:mt-0 flex-shrink-0">
            <div className="border border-brand-light-gray rounded-lg p-6">
              <Skeleton className="w-20 h-20 rounded-full mx-auto mb-4" />
              <Skeleton className="h-6 w-40 mx-auto mb-2" />
              <Skeleton className="h-4 w-32 mx-auto mb-6" />
              <Skeleton className="h-10 w-full mb-3" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
