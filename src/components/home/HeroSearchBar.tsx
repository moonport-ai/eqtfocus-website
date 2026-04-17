import { KestrelWidget } from "@/components/kestrel/KestrelWidget";

const QUICK_SEARCH_CONFIG = {
  component: "quickSearchWidget",
  style: "horizontal",
};

export function HeroSearchBar() {
  return (
    <div className="w-full max-w-4xl mx-auto backdrop-blur-lg bg-white/95 shadow-2xl rounded-2xl p-4 sm:p-6">
      <KestrelWidget config={QUICK_SEARCH_CONFIG} />
    </div>
  );
}
