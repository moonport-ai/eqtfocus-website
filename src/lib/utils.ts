import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ListingAddress } from "@/types/listing";

const CDN_BASE_URL = "https://cdn.repliers.io";

/**
 * Merges class names using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price value into a dollar string.
 * Example: 1250000 -> "$1,250,000"
 */
export function formatPrice(price: string | number): string {
  const numericPrice =
    typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) return "$0";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(numericPrice);
}

/**
 * Formats a listing address into a readable string.
 * Example: "123 Main St, Montclair, NJ 07042"
 */
export function formatAddress(address: ListingAddress): string {
  const parts: string[] = [];

  const streetParts = [
    address.streetNumber,
    address.streetDirectionPrefix,
    address.streetName,
    address.streetSuffix,
  ]
    .filter(Boolean)
    .join(" ");

  if (streetParts) {
    const street = address.unitNumber
      ? `${streetParts} #${address.unitNumber}`
      : streetParts;
    parts.push(street);
  }

  if (address.city) parts.push(address.city);

  const stateZip = [address.state, address.zip].filter(Boolean).join(" ");
  if (stateZip) parts.push(stateZip);

  return parts.join(", ");
}

/**
 * Returns the full image URL for a listing image.
 * Prepends the CDN base URL if the path is relative.
 */
export function getListingImageUrl(imagePath: string): string {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  return `${CDN_BASE_URL}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
}

/**
 * Returns an array of full image URLs from listing images, optionally limited.
 */
export function getListingImages(
  images: string[],
  limit?: number,
): string[] {
  if (!images || images.length === 0) return [];
  const sliced = limit ? images.slice(0, limit) : images;
  return sliced.map(getListingImageUrl);
}

/**
 * Formats a square footage string, handling ranges like "1200-1500".
 */
export function formatSqft(sqft: string): string {
  if (!sqft) return "N/A";

  if (sqft.includes("-")) {
    const [min, max] = sqft.split("-").map((s) => s.trim());
    const formattedMin = parseInt(min).toLocaleString("en-US");
    const formattedMax = parseInt(max).toLocaleString("en-US");
    return `${formattedMin} - ${formattedMax}`;
  }

  const parsed = parseInt(sqft);
  if (isNaN(parsed)) return sqft;
  return parsed.toLocaleString("en-US");
}

/**
 * Formats a date string into a human-readable format.
 * Example: "2024-03-15" -> "March 15, 2024"
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";

  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
