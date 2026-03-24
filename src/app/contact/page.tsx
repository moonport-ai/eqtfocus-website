import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, Button } from "@/components/ui";
import { ContactForm } from "@/components/contact/ContactForm";
import { AGENT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | EQT Focus",
  description:
    "Get in touch with EQT Focus. We are here to help with all your real estate needs in Northern New Jersey.",
};

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-black flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-black flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-black flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-black flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-brand-black py-20 pt-32">
        <Container className="text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-black mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white">
            Contact Us
          </h1>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="col-span-1 lg:col-span-3">
              <h2 className="font-heading text-2xl text-brand-dark-gray mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-brand-medium-gray mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
              <Suspense fallback={<div className="h-96" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Info Sidebar */}
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white rounded-lg p-8">
                <h3 className="font-heading text-xl text-brand-dark-gray mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <PhoneIcon />
                    <div>
                      <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wide">
                        Phone
                      </p>
                      <a
                        href={`tel:${AGENT_INFO.phone}`}
                        className="font-body text-sm text-brand-dark-gray hover:text-brand-black transition-colors"
                      >
                        {AGENT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <EmailIcon />
                    <div>
                      <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wide">
                        Email
                      </p>
                      <a
                        href={`mailto:${AGENT_INFO.email}`}
                        className="font-body text-sm text-brand-dark-gray hover:text-brand-black transition-colors"
                      >
                        {AGENT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-3">
                    <LocationIcon />
                    <div>
                      <p className="font-body text-xs text-brand-medium-gray uppercase tracking-wide">
                        Office
                      </p>
                      <p className="font-body text-sm text-brand-dark-gray">
                        {AGENT_INFO.officeAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-brand-black/30" />

                {/* Office Hours */}
                <h4 className="font-heading text-lg text-brand-dark-gray mb-4">
                  Office Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ClockIcon />
                    <div className="space-y-1.5">
                      <p className="font-body text-sm text-brand-dark-gray">
                        <span className="font-medium">Mon - Fri:</span> 9:00 AM - 6:00 PM
                      </p>
                      <p className="font-body text-sm text-brand-dark-gray">
                        <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
                      </p>
                      <p className="font-body text-sm text-brand-dark-gray">
                        <span className="font-medium">Sunday:</span> By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
