import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS, SERVICE_AREAS, AGENT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Four-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-6" />
            <p className="text-white/50 font-body text-sm tracking-wide mb-4">
              Luxury Real Estate in New Jersey
            </p>
            <p className="text-brand-medium-gray font-body text-sm leading-relaxed">
              Providing exceptional real estate services in Essex, Union, and
              Bergen County. Dedicated to finding your perfect luxury home with
              personalized attention and market expertise.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-body text-sm uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-body text-sm uppercase tracking-wider text-white mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="font-body text-sm text-white/50"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-body text-sm uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${AGENT_INFO.phone.replace(/[^+\d]/g, "")}`}
                  className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {AGENT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENT_INFO.email}`}
                  className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {AGENT_INFO.email}
                </a>
              </li>
              <li className="font-body text-sm text-brand-medium-gray">
                {AGENT_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Black divider */}
        <div className="border-t border-white/15 mt-12 pt-8">
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-body">
            <p>&copy; 2024 EQT Focus. All rights reserved.</p>
            <p>Powered by eXp Realty</p>
            <p>Equal Housing Opportunity</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
