"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, AGENT_INFO } from "@/lib/constants";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header row: Logo + Close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-light-gray">
            <Logo variant="dark" />

            <button
              onClick={onClose}
              className="p-2 text-brand-dark-gray hover:text-brand-black transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                const hasSubmenu = !!link.subLinks && link.subLinks.length > 0;

                return (
                  <li key={link.href}>
                    <div className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "block py-3 font-heading text-xl transition-colors duration-200",
                          isActive
                            ? "text-brand-black"
                            : "text-brand-dark-gray hover:text-brand-black"
                        )}
                      >
                        {link.label}
                      </Link>

                      {hasSubmenu && (
                        <div className="flex flex-col ml-4 border-l border-brand-light-gray mt-1 mb-2">
                          {link.subLinks!.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              onClick={onClose}
                              className="pl-4 py-2 font-body text-sm text-brand-medium-gray hover:text-brand-black transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom section: CTA + contact info */}
          <div className="px-6 py-6 border-t border-brand-light-gray">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full text-center mb-6"
              onClick={onClose}
            >
              Schedule Consultation
            </Button>

            <div className="space-y-2 text-sm text-brand-medium-gray font-body">
              <a
                href={`tel:${AGENT_INFO.phone.replace(/[^+\d]/g, "")}`}
                className="block hover:text-brand-black transition-colors duration-200"
              >
                {AGENT_INFO.phone}
              </a>
              <a
                href={`mailto:${AGENT_INFO.email}`}
                className="block hover:text-brand-black transition-colors duration-200"
              >
                {AGENT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
