export interface Service {
  title: string;
  slug: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Buying",
    slug: "buying",
    description:
      "Whether you're a first-time homebuyer or an experienced purchaser looking to upgrade, we provide expert guidance through every step of the buying process. From identifying the perfect property in New Jersey's most sought-after communities to negotiating the best possible terms, our personalized approach ensures you find a home that truly fits your lifestyle and budget.",
    features: [
      "Personalized home search tailored to your criteria",
      "Access to exclusive and off-market listings",
      "Expert neighborhood and school district analysis",
      "Skilled negotiation to secure the best price",
      "Guidance through inspections, appraisals, and closing",
      "Mortgage lender and financial advisor referrals",
      "Relocation assistance for out-of-state buyers",
    ],
  },
  {
    title: "Selling",
    slug: "selling",
    description:
      "Selling a luxury home in New Jersey requires a strategic marketing approach that showcases your property's unique character and reaches the right audience. We combine professional staging, high-end photography, targeted digital marketing, and our extensive network of qualified buyers to maximize your home's exposure and achieve top-dollar results.",
    features: [
      "Comprehensive market analysis and pricing strategy",
      "Professional staging and interior design consultation",
      "High-quality photography and cinematic video tours",
      "Targeted digital and social media marketing campaigns",
      "Exposure on premium real estate platforms",
      "Open house coordination and private showings",
      "Expert negotiation and offer management",
      "Seamless transaction coordination through closing",
    ],
  },
  {
    title: "Investing",
    slug: "investing",
    description:
      "Northern New Jersey offers exceptional opportunities for real estate investors seeking strong returns and long-term appreciation. Whether you're interested in multi-family properties, fix-and-flip projects, or building a rental portfolio, we provide data-driven investment guidance backed by deep local market knowledge to help you make informed decisions.",
    features: [
      "Investment property identification and evaluation",
      "Cash flow analysis and ROI projections",
      "Multi-family and commercial property expertise",
      "Market trend analysis and emerging neighborhood insights",
      "Property management referrals and resources",
      "1031 exchange guidance and tax strategy referrals",
      "Portfolio growth strategy and planning",
    ],
  },
] as const;
