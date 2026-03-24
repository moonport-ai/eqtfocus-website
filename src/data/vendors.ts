export type VendorCategory =
  | "Conventional Lenders"
  | "Investment Lenders"
  | "Attorneys"
  | "Inspectors"
  | "Title";

export interface Vendor {
  id: string;
  name: string;
  title?: string;
  company: string;
  category: VendorCategory;
  address?: string[];
  phones?: { label: string; number: string }[];
  emails?: string[];
  website?: string;
  profileUrl?: string;
  nmls?: string;
}

export const VENDORS: Vendor[] = [
  {
    id: "david-schwartz",
    name: "David Schwartz",
    title: "Senior Vice President",
    company: "CMG Home Loans",
    category: "Conventional Lenders",
    nmls: "66288",
    address: ["1 Cross Island Plaza, Suite 227A", "Rosedale, NY 11422"],
    phones: [
      { label: "Direct", number: "(917) 201-7134" },
      { label: "Fax", number: "(917) 338-3855" },
      { label: "Cell", number: "(917) 744-2875" },
    ],
    emails: ["dschwartz@cmghomeloans.com", "jterzi@cmghomeloans.com"],
  },
  {
    id: "alejandro-leon",
    name: "Alejandro Leon",
    title: "VP of Mortgage Lending",
    company: "CrossCountry Mortgage",
    category: "Conventional Lenders",
    phones: [{ label: "Direct", number: "(201) 952-9060" }],
    emails: ["alejandro.leon@ccm.com"],
    website: "crosscountrymortgage.com",
    profileUrl: "/Alejandro-Leon",
  },
  {
    id: "danny-lotenberg",
    name: "Danny Lotenberg",
    title: "Loan Officer",
    company: "PRMG – Got Mortgages",
    category: "Conventional Lenders",
    nmls: "2710143",
    address: ["1 Main Street, Suite 201 #D", "Eatontown, NJ 07724"],
    phones: [
      { label: "Direct Office", number: "732-319-5296" },
      { label: "Cell", number: "732-319-5296" },
    ],
    emails: ["danny@gotmortgages.com"],
    website: "www.DannyClosesDeals.com",
  },
  {
    id: "michael-santos",
    name: "Michael Santos",
    title: "C.E.O | Mortgage Loan Originator",
    company: "LionOak Mortgage",
    category: "Conventional Lenders",
    nmls: "199875 | 2537226",
    address: ["140 Mountain Ave, Suite 101", "Springfield, NJ 07081"],
    phones: [
      { label: "Cell", number: "908-296-6608" },
      { label: "Office", number: "908-312-5333" },
      { label: "E-Fax", number: "908-462-6889" },
    ],
    emails: ["Michael@LionOakMortgage.com"],
    website: "LionOakMortgage.com",
  },
  {
    id: "ryan-cobb",
    name: "Ryan Cobb",
    title: "Vice President, Sales",
    company: "Futures Funding, Inc.",
    category: "Investment Lenders",
    phones: [
      { label: "Phone", number: "760-420-4980" },
    ],
    emails: ["Ryan@FuturesFundingInc.com"],
  },
  {
    id: "daphyne-christine",
    name: "Daphyne Christine",
    title: "Investment Lenders",
    company: "Cashflow, Inc.",
    category: "Investment Lenders",
    address: ["Serving Clients Nationwide", "U.S. Based"],
    phones: [
      { label: "Call", number: "(704) 277-4416" },
    ],
    emails: ["Funding@Cashflow.inc"],
  },
  {
    id: "mark-aronowitz",
    name: "Mark H. Aronowitz, Esq.",
    title: "Attorney | with Carla Cruz, Real Estate Paralegal",
    company: "Horan & Aronowitz, LLP",
    category: "Attorneys",
    address: ["100 Hanover Ave, Suite 402", "Cedar Knolls, NJ 07927"],
    phones: [
      { label: "Office", number: "(973) 263-5800" },
      { label: "Fax", number: "(973) 263-5802" },
      { label: "Cell", number: "(917) 494-0217" },
    ],
    emails: ["mha@harlaw.net", "ccruz@harlaw.net"],
  },
  {
    id: "manuel-lago",
    name: "Manuel Lago, Esq.",
    title: "Attorney | with Jamilete Lopez, Real Estate Assistant",
    company: "Law Office of Manuel Lago, Esq.",
    category: "Attorneys",
    address: ["701–703 McCarter Highway, Suite 202", "Newark, NJ 07102"],
    phones: [
      { label: "Office", number: "(973) 242-2142 ext. 101" },
      { label: "Fax", number: "(973) 242-2143" },
    ],
    emails: ["lawoffice@lagolaw.net"],
  },
  {
    id: "carlos-sanchez",
    name: "Carlos Sanchez, Esq.",
    title: "Attorney | with Jennifer Negro, Sr. Paralegal",
    company: "Law Office of Carlos Sanchez",
    category: "Attorneys",
    address: ["216 North Avenue East, 2nd Floor", "Cranford, NJ 07016"],
    phones: [
      { label: "Office", number: "908-557-5630" },
      { label: "Fax", number: "908-379-3057" },
    ],
    emails: ["1@sanchez.lawyer"],
  },
  {
    id: "erick-mejia",
    name: "Erick Mejia",
    company: "Realz Inspections",
    category: "Inspectors",
    address: ["90 State Street, Suite 700", "Albany, NY 12207", "Service Areas: NYC & NJ"],
    phones: [
      { label: "Office", number: "(973) 680-6870" },
      { label: "Cell", number: "(347) 403-1801" },
    ],
    emails: ["erick@realzinspections.com"],
    website: "realzinspections.com",
  },
  {
    id: "simao-alves",
    name: "Simao Alves",
    title: "General Manager",
    company: "LESA Inspections",
    category: "Inspectors",
    address: ["P.O. Box 246", "Hillside, NJ 07205"],
    phones: [
      { label: "Tel", number: "844-537-2552 | 908-988-0933" },
      { label: "Fax", number: "908-345-5004" },
    ],
    emails: ["salves@lesainspections.com"],
    website: "LESAhomewarranty.com",
  },
  {
    id: "renel-jean-baptiste",
    name: "Renel Jean-Baptiste & Robert Rossi",
    title: "EVP / Licensed Title Producers (NJ, PA, FL & NY)",
    company: "Investment Title",
    category: "Title",
    address: ["150 Morristown Road, Suite 210", "Bernardsville, NJ 07924"],
    phones: [
      { label: "Direct", number: "908-295-6583" },
      { label: "Office", number: "800-340-1993 ext. 306" },
    ],
    emails: ["Renel@investmenttitle.com"],
    website: "www.investmenttitle.com",
  },
];
