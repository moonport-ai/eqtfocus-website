import type { Metadata } from "next";
import { KestrelWidget } from "@/components/kestrel/KestrelWidget";

export const metadata: Metadata = {
  title: "Listing Details | EQT Focus",
  description:
    "View detailed information about this luxury property, including photos, features, and neighborhood highlights.",
};

export default function ListingDetailsPage() {
  return (
    <section className="pt-24 pb-10 lg:pt-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <KestrelWidget className="min-h-[600px]" />
      </div>
    </section>
  );
}
