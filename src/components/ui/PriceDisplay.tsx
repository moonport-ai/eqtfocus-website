import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";

type PriceSize = "sm" | "md" | "lg";

interface PriceDisplayProps {
  price: string | number;
  className?: string;
  size?: PriceSize;
}

const sizeStyles: Record<PriceSize, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl md:text-4xl",
};

export function PriceDisplay({
  price,
  className,
  size = "md",
}: PriceDisplayProps) {
  return (
    <span
      className={cn(
        "font-heading text-brand-dark-gray",
        sizeStyles[size],
        className,
      )}
    >
      {formatPrice(price)}
    </span>
  );
}
