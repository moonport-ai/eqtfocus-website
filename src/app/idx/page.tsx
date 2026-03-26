"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ihfKestrel?: {
      render: () => HTMLElement;
    };
  }
}

export default function IDXPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;

    const tryRender = () => {
      if (window.ihfKestrel && containerRef.current) {
        containerRef.current.appendChild(window.ihfKestrel.render());
        rendered.current = true;
      }
    };

    // Try immediately in case script already loaded
    tryRender();

    // If not ready yet, poll briefly
    if (!rendered.current) {
      const interval = setInterval(() => {
        tryRender();
        if (rendered.current) clearInterval(interval);
      }, 200);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-3xl lg:text-4xl text-brand-dark-gray">
            Search All Listings
          </h1>
          <p className="font-body text-brand-medium-gray mt-2 max-w-xl mx-auto">
            Browse the full MLS — powered by iHomeFinder IDX
          </p>
        </div>

        <div ref={containerRef} className="min-h-[600px]" />
      </div>
    </section>
  );
}
