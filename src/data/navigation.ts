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
