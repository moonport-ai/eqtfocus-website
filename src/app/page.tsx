import { Suspense } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";
import { Container } from "@/components/ui";

function FeaturedListingsFallback() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <div className="h-10 w-64 bg-brand-light-gray/50 rounded mx-auto animate-pulse" />
          <div className="h-5 w-96 max-w-full bg-brand-light-gray/30 rounded mx-auto mt-4 animate-pulse" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden border border-brand-light-gray/50"
              >
                <div className="aspect-[4/3] bg-white animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="h-7 w-32 bg-brand-light-gray/50 rounded animate-pulse" />
                  <div className="h-4 w-48 bg-brand-light-gray/30 rounded animate-pulse" />
                  <div className="h-4 w-40 bg-brand-light-gray/20 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<FeaturedListingsFallback />}>
        <FeaturedListings />
      </Suspense>
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
