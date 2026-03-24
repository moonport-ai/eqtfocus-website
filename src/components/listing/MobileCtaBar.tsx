"use client";

import { Button } from "@/components/ui";
import { AGENT_INFO } from "@/lib/constants";

interface MobileCtaBarProps {
  propertyMls?: string;
}

export default function MobileCtaBar({ propertyMls }: MobileCtaBarProps) {
  const contactHref = propertyMls ? `/contact?property=${propertyMls}` : "/contact";

  return (
    <div className="md:hidden sticky top-[72px] z-30 bg-white border-b border-brand-light-gray shadow-sm px-4 py-3 flex gap-3">
      <a
        href={contactHref}
        className="flex-1 bg-brand-black text-white font-body text-sm uppercase tracking-wider text-center py-3 px-4 hover:bg-brand-dark-gray transition-colors"
      >
        Schedule Showing
      </a>
      <a
        href={`tel:${AGENT_INFO.phone}`}
        className="flex-1 border border-brand-black text-brand-black font-body text-sm uppercase tracking-wider text-center py-3 px-4 hover:bg-brand-black hover:text-white transition-colors"
      >
        Call Now
      </a>
    </div>
  );
}
