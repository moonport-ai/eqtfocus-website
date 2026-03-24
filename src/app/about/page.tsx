import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading, Button } from "@/components/ui";
import { AGENT_BIO } from "@/data/agent";

export const metadata: Metadata = {
  title: "About Ingrid Jean-Gilles | EQT Focus",
  description:
    "Meet Ingrid Jean-Gilles, a dedicated luxury real estate professional serving Essex, Union, and Bergen County, New Jersey.",
};

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Counties Served" },
  { value: "100%", label: "Client Focused" },
];

export default function AboutPage() {
  const bioParagraphs = AGENT_BIO.bio.split("\n\n");

  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-black py-20 pt-32">
        <Container className="text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-black mb-4">
            Meet Your Agent
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            About
          </h1>
        </Container>
      </section>

      {/* Bio Section */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Portrait */}
            <div className="col-span-1 lg:col-span-2">
              <div className="relative bg-white rounded-lg overflow-hidden aspect-[3/4] shadow-sm border border-brand-light-gray/50 w-full max-w-md mx-auto lg:mx-0">
                <Image 
                  src="/ingridheadshot.png"
                  alt="Ingrid Jean-Gilles"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="col-span-1 lg:col-span-3">
              <h2 className="font-heading text-3xl md:text-4xl text-brand-dark-gray">
                {AGENT_BIO.name}
              </h2>
              <p className="font-body text-brand-medium-gray mt-2 text-sm tracking-wide uppercase">
                {AGENT_BIO.title} | {AGENT_BIO.brokerage}
              </p>
              <div className="mt-4 h-0.5 w-[60px] bg-brand-black" />

              <div className="mt-8 space-y-5">
                {bioParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-body text-brand-dark-gray leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Credentials */}
              <div className="mt-10 flex flex-wrap gap-2">
                {AGENT_BIO.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="inline-block rounded-full border border-brand-light-gray bg-white px-4 py-1.5 font-body text-xs text-brand-dark-gray"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-5xl text-brand-black">
                  {stat.value}
                </p>
                <p className="font-body text-brand-dark-gray mt-2 text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Areas Section */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            title="Areas We Serve"
            subtitle="Providing expert real estate services across Northern New Jersey's most desirable communities."
            centered
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {AGENT_BIO.serviceAreas.map((area) => (
              <div key={area} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-black flex-shrink-0" />
                <span className="font-body text-sm text-brand-dark-gray">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-black py-16">
        <Container className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white">
            Ready to Work Together?
          </h2>
          <p className="font-body text-brand-medium-gray mt-4 max-w-xl mx-auto">
            Whether you&apos;re buying, selling, or investing, let&apos;s start a
            conversation about your real estate goals.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
