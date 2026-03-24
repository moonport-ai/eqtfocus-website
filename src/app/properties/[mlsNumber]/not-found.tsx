import { Container, Button } from '@/components/ui';

export default function ListingNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center py-20">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-black mb-4">
          Listing Not Found
        </p>
        <h1 className="font-heading text-5xl md:text-6xl text-brand-black mb-6">
          Property Unavailable
        </h1>
        <p className="font-body text-brand-medium-gray max-w-md mx-auto mb-10">
          This listing may have been removed, sold, or the MLS number may be
          incorrect. Try browsing our available properties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/properties" size="lg">
            Browse Properties
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
}
