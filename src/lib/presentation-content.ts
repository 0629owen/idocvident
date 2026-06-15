export type ContentCard = {
  title: string;
  items?: readonly string[];
  body?: string;
};

export type DepartmentSection = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  cards: readonly ContentCard[];
  altBackground?: boolean;
};

export const presentationContent = {
  labName: "IDOC",
  productName: "iDocvident",
  presenter: "Owen Jeung",
  tagline: "A lab-built system, designed for how we actually work",

  hero: {
    title: "Replace Evident.\nBuild what your lab actually needs.",
    subtitle:
      "A custom dental lab platform shaped to streamline workflows, cut operating costs, and improve overall efficiency across your entire operation.",
    pills: [
      "Lower monthly cost",
      "Built for your workflow",
      "Future-proof & secure",
    ],
  },

  problem: {
    title: "Evident gets in the way",
    lead: "Across every department, the same themes came up: slow performance, lost work, limited flexibility, and rising costs as features get bolted on.",
    cards: [
      {
        title: "Reliability & speed",
        items: [
          "Kicks users out and loses unsaved work",
          "Slow website disrupts daily tasks",
          "Security concerns after past incidents",
          "No undo — mistakes are hard to reverse",
        ],
      },
      {
        title: "Workflow friction",
        items: [
          "Case intake missing info before work starts",
          "Remakes lack communication trail",
          "Government vs. private cases poorly divided",
          "Production staff find computers “in the way”",
        ],
      },
      {
        title: "Finance gaps",
        items: [
          "Inaccurate sales reports (especially cash)",
          "Hard to apply payments across invoices",
          "Statement rules differ by customer type",
          "Monthly reporting still needs heavy Excel cleanup",
        ],
      },
      {
        title: "Unused & outdated",
        items: [
          "Doctor portals rarely used vs. phone calls",
          "Materials stock tracking not in use",
          "Many reports generated but seldom referenced",
          "Features teams don’t touch pile up anyway",
        ],
      },
    ],
  },

  savings: {
    title: "Pay less. Own more.",
    lead: "Evident costs keep climbing as AI and add-ons expand. An internal iDoc platform flips that trend — hosted on modern infrastructure you control.",
    stats: [
      {
        amount: "$1,500+",
        label: "Evident base cost / month + extras",
        tone: "warning" as const,
      },
      {
        amount: "Up to $2,000",
        label: "With Evident’s photo AI feature added",
        tone: "warning" as const,
      },
      {
        amount: "~$100",
        label: "iDoc estimate — Vercel, Supabase, email, AI tools",
        tone: "success" as const,
      },
    ],
    quote:
      "As Evident adds features, the price keeps rising. When we build internally, we choose what to change — and costs stay under our control.",
    combinedNote: "Combined: roughly ~$3,500/month in recurring costs we can avoid or eliminate",
  },

  departments: [
    {
      id: "cs",
      eyebrow: "Customer Service",
      title: "Faster intake. Smarter archives.",
      lead: "CS needs full case history for remakes years later — but not everything forever. iDoc archives by warranty while keeping what matters searchable.",
      cards: [
        {
          title: "Case intake",
          items: [
            "Pop-up quick entry with copy & fast-add",
            "Auto product codes → crown, bridge, denture, etc.",
            "Government / private indicators on every product",
            "Link scan program → auto-create new cases",
          ],
        },
        {
          title: "Communication",
          items: [
            "Separate notes: internal iDoc vs. doctor-visible",
            "Upload files → shareable link for dental offices",
            "Remake & clone buttons with teeth diagram check",
            "See who last changed a case",
          ],
        },
        {
          title: "Search & history",
          items: [
            "Keep fuzzy name search (%abc%) & patient tracking",
            "Recent cases view + full archived history",
            "Organize by warranty status",
            "Complaint log with purpose beyond just closing tickets",
          ],
        },
        {
          title: "Automation",
          items: [
            "Auto-save everywhere — no more lost work",
            "Tax rules updatable when policy changes",
            "Batch print tickets for the floor",
            "Urgent case priority flags",
          ],
        },
      ],
    },
    {
      id: "finance",
      eyebrow: "Finance",
      title: "Reports Angie trusts. Statements that match.",
      lead: "Finance spends hours fixing Evident exports. iDoc should produce clean numbers the first time — split by customer type.",
      cards: [
        {
          title: "Payments & billing",
          items: [
            "Apply payments without hunting invoice numbers",
            "Autopay reminders for card-on-file accounts",
            "Credit limits → COD terms when needed",
          ],
        },
        {
          title: "Reports Angie actually uses",
          items: [
            "Aged balances — clean, no negatives, ready by the 20th",
            "Detailed credit reports (product + sales tax split)",
            "Collections split: Private / PDS / Government",
            "Product activity for sales tax — accurate cash handling",
          ],
        },
        {
          title: "Statements per customer type",
          items: [
            "PDS: detailed — products under each invoice",
            "Schools, labs, private: summary option",
            "Per-office email rules (Wisconsin vs. separate sends)",
            "Preview before irreversible print/run",
          ],
        },
        {
          title: "Exports & payroll",
          items: [
            "One Excel sheet for CPA with city & state",
            "Piecework payroll auto-export",
            "Alloy file input, banking reconcile",
            "Ctrl+Z / undo for finance corrections",
          ],
        },
      ],
    },
    {
      id: "production",
      eyebrow: "Production & Technicians",
      title: "Less chasing. More making.",
      lead: "Technicians need scan info, due-date alerts, and clear status — without living at a desktop that slows down the floor.",
      cards: [
        {
          title: "Before work starts",
          items: [
            "Surface missing info that causes delays upfront",
            "Flag unusable scans with common problem types",
            "Auto-pull case details after scan",
            "Tech login for scan tracking & efficiency eval",
          ],
        },
        {
          title: "During production",
          items: [
            "Due-date notification right after scan",
            "Rescan / remill task without manual workarounds",
            "Technician notes separate from dentist notes",
            "Task assignment by role, not verbal chaos",
          ],
        },
        {
          title: "Remakes & status",
          items: [
            "Clear case location & replacement tracking",
            "Reduce remakes with better CS ↔ production comms",
            "Skip-stage option where workflow allows",
            "Open tasks auto-fix with correct dates",
          ],
        },
        {
          title: "Outsourcing (ADL)",
          items: [
            "Replace email CAD sends with structured download",
            "Separate outsourcing lists",
            "Google Drive or direct portal integration",
            "Supplier list kept current & easy to reference",
          ],
        },
      ],
    },
    {
      id: "shipping",
      eyebrow: "Shipping",
      title: "Labels, tracking, fewer mistakes.",
      lead: "Shipping shouldn’t mean re-typing addresses or hunting which case goes where.",
      altBackground: true,
      cards: [
        {
          title: "UPS integration",
          body: "Link & track with end-of-day upload. Tracking numbers visible to dental offices automatically.",
        },
        {
          title: "Correct routing",
          body: "Cases labeled with the right customer address — fewer wrong shipments and manual fixes.",
        },
        {
          title: "Driver reports",
          body: "Daily schedule reports kept for a few weeks — enough history without cluttering the system.",
        },
      ],
    },
  ] satisfies readonly DepartmentSection[],

  features: {
    title: "Everything teams asked for — in one place.",
    lead: "These aren’t nice-to-haves. They came up again and again across departments.",
    pills: [
      "Auto-save",
      "Undo / Ctrl+Z",
      "Teeth diagram",
      "Clone & remake",
      "Doctor portals",
      "Internal messenger",
      "Smart notifications",
      "Big secure storage",
      "Batch print tickets",
      "Urgent case priority",
      "Warranty-based archive",
      "Scan → auto case",
    ],
    quote:
      "Teams were honest: adapting to a new system is a big change. But Evident’s kick-outs, slowness, and rising fees mean the pain of staying is already real. iDoc is built from how your people actually work.",
  },

  vision: {
    title: "iDoc: your lab’s operating system.",
    lead: "Not a generic dental SaaS bill that grows every year. A platform you shape as the industry, technology, and your business change.",
    cards: [
      {
        title: "Customize today",
        body: "Solve the problems CS, Finance, Production, and Shipping described — not a vendor roadmap.",
      },
      {
        title: "Adapt tomorrow",
        body: "AI, new scan tools, tax policy, new customer types — change what you need, when you need it.",
      },
    ],
    stats: [
      { amount: "~93%", label: "Estimated monthly savings vs. Evident" },
      { amount: "1", label: "Platform for every department" },
    ],
    footer:
      "Built on Vercel + Supabase. Scan integration already in progress. Ready to replace Evident piece by piece — on your terms.",
  },

  nextSteps: {
    title: "Proposed next steps",
    steps: [
      "Continue interviews with IDOC employees to document what we actually use in Evident — and what we don't — then use those findings to define a phased replacement plan, starting with the highest-impact workflows.",
      "Pilot iDocvident with a small team before full rollout.",
      "Measure time saved and cost avoided against Evident month over month.",
    ],
    closing:
      "The question isn't whether we can afford to build our own system — it's whether we can afford not to.",
  },
} as const;
