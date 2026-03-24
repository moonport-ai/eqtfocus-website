import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { SERVICES } from "@/data/services";

const SERVICE_NUMBERS = ["01", "02", "03"];

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive real estate solutions tailored to your unique needs"
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, index) => (
            <div
              key={service.slug}
              className="group relative bg-white border border-brand-light-gray/30 p-10 lg:p-12 overflow-hidden transition-all duration-500 hover:bg-brand-black shadow-sm hover:shadow-2xl flex flex-col items-start"
            >
              {/* Background Number Watermark */}
              <span className="absolute -top-6 -right-2 font-heading text-[160px] leading-none text-brand-black/[0.03] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none z-0">
                {SERVICE_NUMBERS[index]}
              </span>

              {/* Content wrapper */}
              <div className="relative z-10 flex flex-col h-full w-full">
                {/* Title */}
                <h3 className="font-heading text-2xl tracking-wide text-brand-black group-hover:text-white transition-colors duration-500 mb-5">
                  {service.title}
                </h3>

                {/* Divider Line */}
                <div className="w-10 h-[1px] bg-brand-black/20 group-hover:bg-white/30 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] mb-6" />

                {/* Description */}
                <p className="font-body text-brand-dark-gray/80 text-sm leading-loose group-hover:text-white/70 transition-colors duration-500 flex-grow">
                  {service.description.slice(0, 150)}...
                </p>

                {/* Learn More link */}
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-brand-black group-hover:text-white transition-colors duration-500 mt-10 origin-left hover:opacity-80"
                >
                  Learn More
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
