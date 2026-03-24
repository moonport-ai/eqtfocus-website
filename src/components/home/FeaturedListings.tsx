import { Container, SectionHeading, Button } from "@/components/ui";
import { PropertyCard } from "@/components/properties/PropertyCard";
import type { SearchResponse } from "@/types/search";

const REPLIERS_BASE_URL = process.env.REPLIERS_BASE_URL || "https://api.repliers.io";
const REPLIERS_API_KEY = process.env.REPLIERS_API_KEY || "";

async function getFeaturedListings() {
  try {
    const url = new URL(`${REPLIERS_BASE_URL}/listings`);
    url.searchParams.set("status", "A");
    url.searchParams.set("type", "sale");
    url.searchParams.set("class", "residential");
    url.searchParams.set("resultsPerPage", "6");
    url.searchParams.set("sortBy", "listPriceDesc");

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "REPLIERS-API-KEY": REPLIERS_API_KEY,
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch featured listings:", res.status);
      return null;
    }

    const data: SearchResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching featured listings:", error);
    return null;
  }
}

export async function FeaturedListings() {
  const data = await getFeaturedListings();
  const listings = data?.listings ?? [];

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Featured Properties"
          subtitle="Explore our handpicked selection of exceptional homes across Northern New Jersey"
          centered
          className="mb-14"
        />

        {listings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <PropertyCard key={listing.mlsNumber} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-heading text-2xl text-brand-dark-gray mb-2">
              Listings Coming Soon
            </p>
            <p className="font-body text-brand-medium-gray max-w-md mx-auto">
              Our featured properties are being curated. Check back shortly for
              an exceptional selection of luxury homes.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-14">
          <Button href="/properties" variant="outline" size="lg">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
