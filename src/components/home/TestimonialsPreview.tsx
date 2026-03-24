import { Container, SectionHeading, Button } from "@/components/ui";
import { TESTIMONIALS } from "@/data/testimonials";

function StarIcon() {
  return (
    <svg
      className="h-4 w-4 text-brand-black fill-brand-black"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function TestimonialsPreview() {
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by homeowners across Northern New Jersey"
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white border border-brand-light-gray/40 p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center text-center group"
            >
              {/* Large quote watermark */}
              <svg className="absolute top-8 left-8 w-20 h-20 text-brand-black/[0.03] group-hover:text-brand-black/[0.06] transition-colors duration-500 select-none z-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-[6px] mb-8 z-10">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-brand-dark-gray/90 text-[15px] leading-[2.2] flex-grow z-10 font-light mb-8 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-brand-black/10 group-hover:bg-brand-black/30 transition-colors duration-500 mb-6 z-10" />

              {/* Client name */}
              <p className="font-heading text-xl tracking-wide text-brand-black z-10">
                {testimonial.name}
              </p>

              {/* Location */}
              <p className="font-body text-brand-medium-gray text-[11px] uppercase tracking-[0.2em] mt-3 z-10">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
