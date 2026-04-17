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
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const SERVICE_AREAS = [
  "Essex County",
  "Union County",
  "Bergen County",
] as const;

export const AGENT_INFO = {
  name: "Ingrid Jean-Gilles",
  title: "Licensed Real Estate Agent",
  brokerage: "EQT Focus",
  phone: "(973) 555-0123",
  email: "Ingrid@creativesolutionsnj.co",
  address: "123 Main Street, Suite 200, Montclair, NJ 07042",
  officeAddress: "123 Main Street, Suite 200, Montclair, NJ 07042",
} as const;
