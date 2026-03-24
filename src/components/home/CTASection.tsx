import { Container, Button } from "@/components/ui";

export function CTASection() {
  return (
    <section className="bg-brand-black py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Black accent label */}
          <p className="font-body text-sm tracking-[0.3em] text-white/50 uppercase">
            Your Next Chapter Awaits
          </p>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl text-white mt-4">
            Ready to Find Your Dream Home?
          </h2>

          {/* Subtext */}
          <p className="font-body text-white/70 max-w-xl mx-auto mt-6 leading-relaxed">
            Let us guide you through every step of your real estate journey.
            Whether you&apos;re buying, selling, or investing, our expertise and
            dedication will help you achieve your goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button href="/properties" variant="primary" size="lg">
              Browse Properties
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-black"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
