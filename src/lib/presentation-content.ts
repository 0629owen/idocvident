export type ContentCard = {
  title: string;
  items?: readonly string[];
  body?: string;
};

export type NextStep = {
  text: string;
  target: string;
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
    title: "Replace Evident.\nBuild what our lab actually needs.",
    subtitle:
      "A custom dental lab platform shaped to streamline workflows, cut operating costs, and improve overall efficiency across our entire operation.",
    pills: [
      "Lower monthly cost",
      "Built for our workflow",
      "Future-proof & secure",
    ],
  },

  problem: {
    eyebrow: "1 · Why change",
    title: "Evident gets in the way — and IDOC pays for it",
    lead: "Across every department, the same themes came up: slow performance, lost work, limited flexibility, and rising costs as features get bolted on. We end up shaping our work around Evident’s structure instead of the other way around.",
    impact: {
      title: "How this hits IDOC day to day",
      items: [
        "CS loses time on every lab slip — work that should take seconds stacks up across hundreds of cases",
        "Production runs on shared PCs and hallway updates because Evident wasn’t built for benches without desks",
        "Stuck tasks and missing intake info delay cases before they reach the floor",
        "We pay ~$1,500/month for a system teams fight against — and still adapt our process to fit it",
      ],
    },
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
          "Entering lab slips takes too long — every field, every click",
          "Case intake missing info before work starts",
          "Remakes face communication challenges across teams",
          "Many technicians have no computer at their desk — shared machines only",
          "Processes bent to fit Evident — not how we actually work",
        ],
      },
      {
        title: "Rigid structure",
        items: [
          "Workflows forced into Evident’s menus and stages",
          "Hard to skip steps or fix stuck tasks without workarounds",
          "Finance mostly works — but CS and production pay the price",
          "Teams adapt to the software instead of building around our lab",
        ],
      },
      {
        title: "Unused & outdated",
        items: [
          "Doctor portals difficult for us to access and maintain",
          "Materials stock tracking not in use",
          "Many reports generated but seldom referenced",
          "Features teams don’t touch pile up anyway",
        ],
      },
    ],
  },

  whatWeWillDo: {
    eyebrow: "2 · What we will do",
    title: "Build iDocvident around how our teams actually work",
    lead: "Department by department — keep what already works, fix the gaps that cost us time every day.",
  },

  approach: {
    eyebrow: "3 · How we will do it",
    title: "Build with Cursor — two people, modern tools, our roadmap",
    lead: "We are not waiting on a vendor. Owen and a partner will build iDocvident in focused sessions using Cursor (AI-assisted coding), ship prototypes to localhost, then pilot with real workflows.",
    cards: [
      {
        title: "Cursor + AI-assisted development",
        items: [
          "Two builders, ~4 hours/day — focused sprints, not a multi-year IT project",
          "Cursor speeds up UI, workflow logic, and iteration from interview feedback",
          "Prototype on localhost first; team leaders review before anyone goes live",
        ],
      },
      {
        title: "Stack we control",
        items: [
          "Next.js on Vercel, Supabase for data — fast, secure, low monthly cost",
          "Scan integration already in progress",
          "Change what we need without Evident release cycles or add-on fees",
        ],
      },
      {
        title: "Phased, not big-bang",
        items: [
          "Interviews first — document what we use vs. ignore in Evident",
          "CS intake prototype, then a parallel pilot (no Evident API to plug into)",
          "Production and shipping modules follow once CS proves the model",
        ],
      },
    ],
    quote:
      "Cursor lets a small lab team build software that used to require a vendor. We still need your domain knowledge — the code is only as good as the workflows you help us capture.",
  },

  benefits: {
    eyebrow: "4 · Benefits",
    title: "Time saved and money kept",
    lead: "iDocvident pays off in hours back on the floor and dollars off the monthly bill.",
    time: {
      title: "Time — workflow & modernization",
      items: [
        "Faster lab-slip entry and scan-linked case creation",
        "Auto-save and undo — less rework when Evident kicks you out",
        "Case-linked CS ↔ production notes — fewer walk-overs and remakes",
        "Alerts at shared scan stations — no personal desktop required",
        "Skip stuck stages, fix open tasks, surface missing info upfront",
        "Modern, fast UI — less waiting on a slow Evident page",
      ],
    },
    money: {
      title: "Money — lower cost, no rising add-ons",
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
      combinedNote:
        "Combined: roughly ~$3,500/month in recurring costs we can avoid or eliminate",
      highlight: "~93% estimated monthly savings vs. Evident once fully migrated",
    },
  },

  engagement: {
    eyebrow: "5 · We need you",
    title: "Team leaders — help us build this right",
    lead: "This only works if department leads engage now. We are asking for cooperation in this meeting and through the pilot — not passive approval.",
    asks: [
      {
        title: "Jun 19 – 27: interviews",
        body: "Block time for short interviews. Tell us what your team actually uses in Evident — and what they work around every day.",
      },
      {
        title: "Champion the pilot",
        body: "When the CS prototype launches, we need a lead willing to run Evident and iDocvident in parallel and report what breaks.",
      },
      {
        title: "Honest feedback",
        body: "Say what slows people down. No polish needed — rough notes beat silence. That input goes straight into the next Cursor build session.",
      },
      {
        title: "Protect the dual-system period",
        body: "Parallel systems are awkward by design. Help your team tolerate manual handoffs until iDoc covers enough to cut Evident use.",
      },
    ],
    closing:
      "We are not replacing Evident on a slide deck. We are asking you to co-own the replacement — starting with interviews next week.",
  },

  departments: [
    {
      id: "cs",
      eyebrow: "Customer Service",
      title: "Faster intake. Smarter archives.",
      lead: "CS needs full case history for remakes years later — but not everything forever. We keep what already works in Evident and fix the gaps that slow lab-slip entry, remakes, and stuck tasks.",
      cards: [
        {
          title: "Keeping what works",
          items: [
            "Fuzzy name search (%abc%) & patient tracking",
            "Recent cases view + full archived history",
            "Separate notes: internal iDoc vs. doctor-visible",
            "Remake & clone buttons with teeth diagram check",
            "See who last changed a case",
          ],
        },
        {
          title: "Case intake improvements",
          items: [
            "Pop-up quick entry with copy & fast-add — cut lab-slip time",
            "Auto product codes → crown, bridge, denture, etc.",
            "Separate government & private portals — gov/private tags on each product name",
            "Link scan program → auto-create new cases",
          ],
        },
        {
          title: "Communication improvements",
          items: [
            "Upload files → shareable link for dental offices",
            "Complaint log with purpose beyond just closing tickets",
          ],
        },
        {
          title: "Workflow fixes",
          items: [
            "Auto-save everywhere — no more lost work",
            "Skip-stage option where workflow allows",
            "Open tasks auto-fix with correct dates",
            "Organize cases by warranty status",
            "Batch print tickets for production & shipping desks",
            "Tax rules updatable when policy changes",
            "Urgent case priority flags",
          ],
        },
      ],
    },
    {
      id: "production",
      eyebrow: "Production & Technicians",
      title: "Less chasing. More making.",
      lead: "Most technicians don’t have a computer at their bench — they share scan stations and shared PCs. iDoc doesn’t assume a personal inbox: alerts surface when someone scans or opens a case at a shared station, not on a desktop they never sit at.",
      cards: [
        {
          title: "Keeping what works",
          items: [
            "Technician notes separate from dentist notes",
            "Task assignment by role, not verbal chaos",
          ],
        },
        {
          title: "How techs get updates (no desk PC)",
          items: [
            "Scan at a shared station → due date, remake notes, and flags show immediately",
            "Production queue on shared scan PCs — check when passing through, not all day",
            "CS updates on the case record — visible next time anyone opens it at a station",
            "Batch-printed tickets still an option where a screen isn’t practical",
          ],
        },
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
            "Due-date alert on scan — shown at the station, not a personal notification",
            "Rescan / remill task without manual workarounds",
            "Lightweight case view at shared scan stations",
          ],
        },
        {
          title: "CS ↔ production comms",
          items: [
            "Case-linked internal notes both teams see — updates without a walk-over",
            "Remake reason captured at intake → visible in production queue right away",
            "Status changes logged (who, when) — a clear record on the case",
            "Searchable history beats hallway conversations for remakes months later",
          ],
        },
        {
          title: "Remakes & status",
          items: [
            "Clear case location & replacement tracking",
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
      lead: "Evident already handles labels, routing, and driver reports. iDoc improves what’s still slow — less re-typing at ship time, smoother UPS flow, and optional scan lookup when someone needs to know where a pan is.",
      altBackground: true,
      cards: [
        {
          title: "UPS integration",
          body: "End-of-day upload with tracking numbers pushed to dental offices automatically — fewer manual follow-ups than today’s Evident workflow.",
        },
        {
          title: "Ship from the case record",
          body: "Address and case details flow from intake — no re-typing what CS already entered. Evident has routing; iDoc makes the handoff faster.",
        },
        {
          title: "Where a pan is",
          body: "When it matters, scan lookup shows tray location — a secondary benefit, not the main reason we’re building shipping in iDoc.",
        },
      ],
    },
    {
      id: "finance",
      eyebrow: "Finance",
      title: "Keep what works. No rebuild planned.",
      lead: "Finance runs well enough in Evident today. During the iDoc rollout, Angie and the team stay on their current workflows — we are conserving how billing, statements, and reports work now, not redesigning them.",
      cards: [
        {
          title: "Payments & billing — unchanged",
          items: [
            "Apply payments across invoices the way we do today",
            "Credit limits and COD terms stay as configured",
            "Autopay and card-on-file accounts handled in Evident",
          ],
        },
        {
          title: "Reports Angie uses — unchanged",
          items: [
            "Aged balances and detailed credit reports",
            "Collections split: Private / PDS / Government",
            "Product activity and sales tax reporting",
            "Monthly reporting workflow stays the same",
          ],
        },
        {
          title: "Statements per customer type — unchanged",
          items: [
            "PDS detailed statements with products under each invoice",
            "Summary statements for schools, labs, and private accounts",
            "Per-office email rules and preview before print/run",
          ],
        },
        {
          title: "Exports & payroll — unchanged",
          items: [
            "CPA Excel export with city and state",
            "Piecework payroll and banking reconcile in Evident",
            "Finance stays in Evident through the CS and production pilot",
          ],
        },
      ],
    },
  ] satisfies readonly DepartmentSection[],

  features: {
    title: "Reliability basics every team needs.",
    lead: "Not everything in a lab system is shared — teams use different features day to day. Auto-save and undo are things we can add in iDoc; Evident doesn’t offer them today. Both came up everywhere because lost work and irreversible mistakes hurt every department.",
    pills: ["Auto-save", "Undo / Ctrl+Z"],
    quote:
      "Teams were honest: adapting to a new system is a big change. But Evident’s kick-outs, slowness, and rising fees mean the pain of staying is already real. iDoc is built from how our people actually work.",
  },

  nextSteps: {
    eyebrow: "6 · Timeline & conclusion",
    title: "Phased rollout — Evident and iDocvident in parallel",
    lead: "Built on Vercel + Supabase. Scan integration already in progress. We replace Evident piece by piece — on our terms — not in one cutover.",
    steps: [
      {
        target: "Jun 19 – Jun 27, 2026",
        text: "Continue interviews with IDOC employees to document what we actually use in Evident — and what we don’t — then define a phased replacement plan starting with CS intake and workflow fixes.",
      },
      {
        target: "Jun 29 – Aug 29, 2026",
        text: "Build the CS intake prototype (two people, ~4 hrs/day with Cursor): quick entry, scan-linked cases, auto-save, and skip-stage / task fixes.",
      },
      {
        target: "Sep 2 – Sep 26, 2026",
        text: "Prototype launch with a small CS pilot — iDocvident runs separately alongside Evident. Evident has no integration API, so the two systems operate in parallel with manual handoffs where needed; billing, finance, and untouched workflows stay in Evident only.",
      },
      {
        target: "Sep 29 – Nov 7, 2026",
        text: "Add production and shipping modules (scan tracking, due-date alerts, pan location) while the dual-system pilot continues.",
      },
      {
        target: "Nov 10, 2026 onward",
        text: "Measure time saved and cost avoided against Evident month over month, then expand rollout department by department.",
      },
    ] satisfies readonly NextStep[],
    closing:
      "The question isn't whether we can afford to build our own system — it's whether we can afford not to.",
  },
} as const;
