import { Container, SectionHeading, Button } from "@/components/ui";
import { KestrelWidget } from "@/components/kestrel/KestrelWidget";

const GALLERY_SLIDER_CONFIG = {
  component: "gallerySliderWidget",
  rows: 1,
  navigation: true,
  nav: "top",
  auto: true,
  maxResults: 6,
  status: "active",
  featured: false,
  effect: "slide",
  sort: "ds",
  id: 2994845,
};

export function FeaturedListings() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Featured Properties"
          subtitle="Explore our handpicked selection of exceptional homes across Northern New Jersey"
          centered
          className="mb-14"
        />

        <KestrelWidget config={GALLERY_SLIDER_CONFIG} className="min-h-[420px] mb-10" />

        <div className="flex justify-center">
          <Button href="/properties" variant="outline" size="lg">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
