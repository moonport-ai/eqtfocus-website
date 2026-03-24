import Image from "next/image";
import { HeroSearchBar } from "./HeroSearchBar";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Luxury Modern Mansion Exterior"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
        {/* Soft vignette overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto pt-24">
        {/* Main Logo */}
        <div className="mb-8 w-64 md:w-80 lg:w-[450px] relative">
          <Image
            src="/eqtfocuslogo.svg"
            alt="EQT Focus"
            width={450}
            height={160}
            className="w-full h-auto drop-shadow-2xl brightness-0 invert opacity-[0.97]"
            priority
          />
        </div>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl font-light tracking-wide drop-shadow-md">
          Curated Listings of the World's Most Prestigious Properties
        </p>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-white/30 mx-auto mt-8 mb-12" />

        {/* Search bar wrapper for Glassmorphism */}
        <div className="w-full">
          <HeroSearchBar />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/70">
          Scroll to Explore
        </span>
        <div className="animate-bounce">
          <svg
            className="h-5 w-5 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
