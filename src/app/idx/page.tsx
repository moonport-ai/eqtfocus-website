import { KestrelWidget } from "@/components/kestrel/KestrelWidget";

export default function IDXPage() {
  return (
    <section className="pt-24 pb-10 lg:pt-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-3xl lg:text-4xl text-brand-dark-gray">
            Search All Listings
          </h1>
          <p className="font-body text-brand-medium-gray mt-2 max-w-xl mx-auto">
            Browse the full MLS — powered by iHomeFinder IDX
          </p>
        </div>
        <KestrelWidget className="min-h-[600px]" />
      </div>
    </section>
  );
}
