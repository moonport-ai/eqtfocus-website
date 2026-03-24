export interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { 
    label: "Vendors", 
    href: "/vendors",
    subLinks: [
      { label: "Conventional Lenders", href: "/vendors#conventional-lenders" },
      { label: "Investment Lenders", href: "/vendors#investment-lenders" },
      { label: "Attorneys", href: "/vendors#attorneys" },
      { label: "Inspectors", href: "/vendors#inspectors" },
      { label: "Title", href: "/vendors#title" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_AREAS = [
  "Essex County",
  "Union County",
  "Bergen County",
] as const;

export const PRICE_RANGES = [
  { label: "Any Price", value: "" },
  { label: "$200,000+", value: "200000" },
  { label: "$400,000+", value: "400000" },
  { label: "$600,000+", value: "600000" },
  { label: "$800,000+", value: "800000" },
  { label: "$1,000,000+", value: "1000000" },
  { label: "$1,500,000+", value: "1500000" },
  { label: "$2,000,000+", value: "2000000" },
  { label: "$3,000,000+", value: "3000000" },
  { label: "$5,000,000+", value: "5000000" },
] as const;

export const BEDROOM_OPTIONS = [
  { label: "Any Beds", value: "" },
  { label: "1+ Bed", value: "1" },
  { label: "2+ Beds", value: "2" },
  { label: "3+ Beds", value: "3" },
  { label: "4+ Beds", value: "4" },
  { label: "5+ Beds", value: "5" },
  { label: "6+ Beds", value: "6" },
] as const;

export const BATHROOM_OPTIONS = [
  { label: "Any Baths", value: "" },
  { label: "1+ Bath", value: "1" },
  { label: "2+ Baths", value: "2" },
  { label: "3+ Baths", value: "3" },
  { label: "4+ Baths", value: "4" },
  { label: "5+ Baths", value: "5" },
] as const;

export const PROPERTY_TYPES = [
  { label: "All Types", value: "" },
  { label: "Detached", value: "Detached" },
  { label: "Semi-Detached", value: "Semi-Detached" },
  { label: "Townhouse", value: "Att/Row/Twnhouse" },
  { label: "Condo", value: "Condo Apt" },
  { label: "Multi-Family", value: "Multiplex" },
  { label: "Vacant Land", value: "Vacant Land" },
] as const;

export const SORT_OPTIONS = [
  { label: "Newest First", value: "updatedOn" },
  { label: "Price: Low to High", value: "listPrice" },
  { label: "Price: High to Low", value: "-listPrice" },
  { label: "Bedrooms", value: "-details.numBedrooms" },
  { label: "Square Feet", value: "-details.sqft" },
] as const;

export const AGENT_INFO = {
  name: "Ingrid Jean-Gilles",
  title: "Licensed Real Estate Agent",
  brokerage: "EQT Focus",
  phone: "(973) 555-0123",
  email: "ingrid@maisonluxuryrealty.com",
  address: "123 Main Street, Suite 200, Montclair, NJ 07042",
  officeAddress: "123 Main Street, Suite 200, Montclair, NJ 07042",
} as const;
