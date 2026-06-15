export type EvidentNavSection = "Cases" | "Operations" | "Financials" | "Reports";

export const EVIDENT_NAV_SECTIONS: EvidentNavSection[] = [
  "Cases",
  "Operations",
  "Financials",
  "Reports",
];

export const EVIDENT_SECTION_TOPICS: Record<EvidentNavSection, string[]> = {
  Cases: [
    "Customer File",
    "Complaint File",
    "Global Search",
    "Case List / Find a Case",
    "Case Problems",
    "Scanner Upload",
    "Customer Import",
  ],
  Operations: [
    "Tickets",
    "Day Sheets",
    "Driver's Report",
    "Shipping Schedule",
    "Due to Arrive List",
    "Try-In Cases",
    "Held Cases",
    "Daily Arrivals",
  ],
  Financials: [
    "Activity Reports",
    "Customer Activity",
    "Product Activity",
    "Diary Activity",
    "Daily Activity",
    "Period Activity",
    "Up & Down Activity",
    "Monthly Activity",
    "Aged Balances",
    "Debtor Letters",
    "Tax Remittance",
    "MDT Remittance",
    "Credit Notes",
    "Open Invoices",
    "Invoices",
    "Banking",
    "Accounting Export",
    "Receive Payments",
  ],
  Reports: [
    "Customers",
    "Customer Labels",
    "Customer Letters",
    "Customer List",
    "Customer Export",
    "Suspended Customers",
    "Print Server",
    "Exceptions List",
    "Print Price List",
    "Price Comparison",
    "Product Sales",
    "Remakes (External)",
    "Document Email / Print Report",
    "Last Case Date",
    "Customer Special Pricing",
    "PDS Monthly Report",
  ],
};

export const EVIDENT_TREE = {
  label: "Evident",
  children: [
    {
      label: "Top Navigation",
      children: EVIDENT_NAV_SECTIONS.map((label) => ({ label })),
    },
  ],
} as const;
