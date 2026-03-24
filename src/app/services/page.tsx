import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading, Button, Divider } from "@/components/ui";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | EQT Focus",
  description:
    "Explore our comprehensive real estate services including buying, selling, and investing in luxury properties across Northern New Jersey.",
};

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-black flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-black py-20 pt-32">
        <Container className="text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-black mb-4">
            What We Offer
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            Our Services
          </h1>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="space-y-0">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 1;
              const serviceNumber = String(index + 1).padStart(2, "0");

              return (
                <div key={service.slug}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 ${
                      index === 0 ? "pt-0" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`${isEven ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="relative bg-white rounded-lg aspect-[4/3] overflow-hidden shadow-sm border border-brand-light-gray/30 w-full group">
                        <Image
                          src={`/services-${service.slug}.jpg`}
                          alt={`${service.title} Service`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div
                      className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <h2 className="font-heading text-3xl text-brand-dark-gray">
                        {service.title}
                      </h2>
                      <p className="font-body text-brand-dark-gray leading-relaxed mt-4">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 font-body text-sm text-brand-dark-gray"
                          >
                            <CheckIcon />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button href="/contact">Get Started</Button>
                      </div>
                    </div>
                  </div>

                  {/* Divider between sections */}
                  {index < SERVICES.length - 1 && <Divider />}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <Container className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-dark-gray">
            Let&apos;s Discuss Your Goals
          </h2>
          <p className="font-body text-brand-medium-gray mt-4 max-w-xl mx-auto">
            Every real estate journey is unique. Let us create a personalized
            strategy tailored to your needs.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
