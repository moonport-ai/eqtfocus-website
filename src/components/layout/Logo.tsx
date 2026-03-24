import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-block group", className)}
      aria-label="eXp Realty - Home"
    >
      <Image
        src="/exprealty.svg"
        alt="eXp Realty"
        width={120}
        height={40}
        className={cn(
          "h-11 w-auto transition-opacity duration-300 group-hover:opacity-70",
          variant === "light" && "invert"
        )}
        priority
      />
    </Link>
  );
}
