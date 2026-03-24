"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

interface NavbarProps {
  variant?: "light" | "dark";
}

export function Navbar({ variant = "dark" }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          const hasSubmenu = !!link.subLinks && link.subLinks.length > 0;

          return (
            <li key={link.href} className={cn("relative", hasSubmenu && "group")}>
              <Link
                href={link.href}
                className={cn(
                  "font-body text-sm uppercase tracking-wider transition-colors duration-300 inline-flex items-center gap-0.5 py-2",
                  isActive
                    ? variant === "light" ? "text-white" : "text-brand-black"
                    : variant === "light"
                      ? "text-white/70 hover:text-white"
                      : "text-brand-dark-gray hover:text-brand-black"
                )}
              >
                {link.label}
                {hasSubmenu && (
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 lg:group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {hasSubmenu && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-white border border-brand-light-gray/50 shadow-xl rounded-lg py-3 min-w-[220px] flex flex-col relative before:absolute before:-top-4 before:left-0 before:w-full before:h-5">
                    {link.subLinks!.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="px-5 py-2.5 font-body text-[13px] uppercase tracking-wider text-brand-dark-gray hover:text-brand-black hover:bg-brand-light-gray/20 transition-colors whitespace-nowrap"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
