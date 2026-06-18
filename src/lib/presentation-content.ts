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
  presenter: "Owen Jeung & Caleb Kim",
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
    eyebrow: "2 · Why change",
    title: "Evident gets in the way — and IDOC pays for it",
    lead: "Evident is slow, rigid, and built for a desk — not how CS or production actually work.",
    impact: {
      title: "How this hits IDOC day to day",
      items: [
        "Lab slips and missing intake info slow every case before it reaches the floor",
        "No desk PCs, weak scan incentives, and screens techs struggle to use",
        "~$1,500/month for a system we still work around",
      ],
    },
    cards: [
      {
        title: "Reliability & speed",
        items: [
          "Kicks users out and loses unsaved work",
          "Slow pages disrupt daily work",
          "No undo when something goes wrong",
        ],
      },
      {
        title: "CS & intake",
        items: [
          "Lab slips take too long — every field, every click",
          "Missing info and weak remake communication delay the floor",
        ],
      },
      {
        title: "Production on the floor",
        items: [
          "No computer at most benches — shared stations only",
          "Scanning isn’t tied to pay — little reason to use it",
          "Senior techs aren’t comfortable with Evident’s desktop screens",
        ],
      },
      {
        title: "Wrong fit for IDOC",
        items: [
          "Workflows forced into Evident’s menus and stuck stages",
          "Evident and iDoc cannot integrate — every parallel phase needs manual handoffs",
          "Features we don’t use still cost us every month",
        ],
      },
    ],
  },

  whatWeWillDo: {
    eyebrow: "3 · What we will do",
    title: "Build around how our teams actually work",
    lead: "Keep what works. Fix the gaps that cost time every day.",
  },

  approach: {
    eyebrow: "4 · How we will do it",
    title: "Owen and Caleb build with Cursor",
    lead: "Not a vendor roadmap — Owen and Caleb ship prototypes with Cursor, then pilot with real workflows.",
    cards: [
      {
        title: "How we build",
        items: [
          "Owen and Caleb, ~4 hours/day — Cursor turns interview feedback into working software",
          "Prototype on localhost first; team leaders review before anyone goes live",
        ],
      },
      {
        title: "How we roll out",
        items: [
          "Interviews first — CS intake in parallel with Evident, then other departments",
          "Production and shipping follow once CS proves the model",
        ],
      },
    ],
  },

  cherneyQuote: {
    text: "Coding is no longer the hard part. Understanding the domain is. So the future of software may belong to people who know the work deeply and can now turn that knowledge into tools.",
    attribution: "Boris Cherny, Head of Claude Code",
  },

  benefits: {
    eyebrow: "5 · Benefits",
    title: "Time saved and money kept",
    lead: "Hours back on the floor and dollars off the monthly bill.",
    time: {
      title: "Time — workflow & modernization",
      items: [
        "Faster lab-slip entry and scan-linked cases",
        "Auto-save, undo, and case notes CS and production both see",
        "Less time hunting for pans — scan ties cases to trays",
        "Bluetooth scanners on the floor — no desktop computer required",
        "Mobile-friendly views where a shared screen isn’t practical",
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
    eyebrow: "6 · We need you",
    title: "Team leaders — help us build this right",
    lead: "This only works if department leads engage now. We are asking for cooperation in this meeting and through the pilot — not passive approval.",
    asks: [
      {
        title: "Jun 19 – 27: interviews",
        body: "Block time for short interviews. Tell us what your team actually uses in Evident — and what they work around every day.",
      },
      {
        title: "Through the pilot",
        body: "Champion running Evident and iDoc in parallel, give honest feedback straight into the next build, and help your team through the dual-system period until iDoc covers enough.",
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
      lead: "Keep Evident’s strengths. Fix lab-slip time, archives, and stuck tasks.",
      cards: [
        {
          title: "Keeping what works",
          items: [
            "Fuzzy search, case history, remake & clone",
            "Separate internal vs. doctor notes",
            "See who last changed a case",
          ],
        },
        {
          title: "Intake improvements",
          items: [
            "Photo of lab slip → upload → auto-create case in iDoc — like scan-linked intake",
            "Scan lab slip → upload → auto-create new cases",
          ],
        },
        {
          title: "Archive & pans",
          items: [
            "Five years active, then cold archive — still searchable",
            "VA / BLK pans separate work — not tied to a VA Long Beach contract clause",
            "No outsourcing to foreign countries; alloy must be noble metal",
          ],
        },
        {
          title: "Workflow fixes",
          items: [
            "Auto-save, skip-stage, and fix stuck open tasks",
            "Batch print tickets and urgent case flags",
          ],
        },
      ],
    },
    {
      id: "production",
      eyebrow: "Production & Technicians",
      title: "Less chasing. More making.",
      lead: "Scan-first workflows — Bluetooth scanners and mobile views, not a desktop at every bench.",
      cards: [
        {
          title: "Keeping what works",
          items: [
            "Technician notes separate from dentist notes",
            "Task assignment by role",
          ],
        },
        {
          title: "Easier on the floor",
          items: [
            "Barcode on the pan — scan the tray, not a work ticket",
            "Bluetooth scanner provided — no desktop computer at the bench",
            "Mobile version of the program where a phone or tablet works better",
          ],
        },
        {
          title: "At the scan station",
          items: [
            "Due dates and flags show when someone scans",
            "Rescan / remill without manual workarounds",
            "CS updates visible next time the case is opened",
          ],
        },
        {
          title: "CS ↔ production",
          items: [
            "Shared internal notes on the case — fewer walk-overs",
            "Remake reason at intake → production queue right away",
            "Status changes logged (who, when)",
            "Clear case location & replacement tracking",
          ],
        },
        {
          title: "Outsourcing (ADL)",
          items: [
            "Structured CAD download — replace email sends",
            "Separate outsourcing lists and supplier tracking",
          ],
        },
      ],
    },
    {
      id: "shipping",
      eyebrow: "Shipping",
      title: "Labels, tracking, fewer mistakes.",
      lead: "Evident already handles basics. iDoc cuts re-typing and smooths UPS handoff.",
      altBackground: true,
      cards: [
        {
          title: "UPS & tracking",
          body: "End-of-day upload — tracking numbers reach dental offices automatically.",
        },
        {
          title: "Ship from the case",
          body: "Address and details flow from intake — no re-typing what CS already entered.",
        },
      ],
    },
    {
      id: "finance",
      eyebrow: "Finance",
      title: "Keep what works. Transfer later.",
      lead: "Finance is not staying on Evident forever — it may move to iDoc in a later rollout phase. Evident and iDoc cannot integrate, so any overlap means manual handoffs until cutover.",
      cards: [
        {
          title: "Keeping what works",
          items: [
            "Payments, aged balances, statements, and monthly reporting as today",
            "CPA export, payroll, and banking reconcile carried over when we transfer",
          ],
        },
        {
          title: "Planned improvements",
          items: [
            "Autopayment for card-on-file customers",
            "Search by invoice number, not reference number",
          ],
        },
        {
          title: "Rollout timing",
          items: [
            "CS and production first — finance may transfer once those phases prove out",
            "No Evident API — finance and iDoc run separately until we move billing over",
          ],
        },
      ],
    },
  ] satisfies readonly DepartmentSection[],

  features: {
    title: "Reliability basics every team needs.",
    lead: "Auto-save and undo — we can add them in iDoc; Evident doesn’t offer them today.",
    pills: ["Auto-save", "Undo / Ctrl+Z"],
  },

  vision: {
    eyebrow: "3 · The vision",
    title: "iDoc: our lab’s operating system.",
    lead: "Not a generic dental SaaS bill that grows every year. A platform we shape as our business and technology change.",
    cards: [
      {
        title: "Customize today",
        body: "Solve what CS, Production, and Shipping raised first — finance transfers later as rollout expands. Evident and iDoc never integrate.",
      },
      {
        title: "Adapt tomorrow",
        body: "AI, scan tools, tax policy, new customer types — change what we need, when we need it.",
      },
    ],
    stats: [
      { amount: "~93%", label: "Estimated monthly savings vs. Evident" },
      { amount: "1", label: "Platform for every department" },
    ],
    footer:
      "Built on Vercel + Supabase. Scan integration in progress. Replace Evident piece by piece — on our terms.",
  },

  nextSteps: {
    eyebrow: "7 · Timeline & conclusion",
    title: "Phased rollout — Evident and the new program in parallel",
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
        text: "Prototype launch with a small CS pilot — the new program runs separately alongside Evident. Evident has no integration API, so the two systems operate in parallel with manual handoffs where needed; finance may transfer in a later phase, not stay on Evident permanently.",
      },
      {
        target: "Sep 29 – Nov 7, 2026",
        text: "Add production, shipping, and eventually finance modules while the dual-system pilot continues — each cutover is separate because Evident and iDoc cannot integrate.",
      },
      {
        target: "Nov 10, 2026 onward",
        text: "Measure time saved and cost avoided against Evident month over month, then expand rollout department by department.",
      },
    ] satisfies readonly NextStep[],
    closing:
      "The question isn't whether we can afford to build our own system — it's whether we can afford not to.",
  },

  nameVote: {
    eyebrow: "Name the system",
    title: "Vote on what we call it",
    lead: "We are picking a name for the new program. Your preference counts.",
    options: [
      {
        name: "IDOC CORE",
        tagline: "Commitment, Ownership, Reliability, Excellence",
      },
      {
        name: "NUCLEAR",
        tagline: "No meaning — just sounded crazy",
      },
      {
        name: "IDOC PULSE",
        tagline: "People first, Unity, Leadership, Service, Excellence",
      },
    ],
  },

  feedback: {
    title: "Questions or feedback?",
    lead: "Reach out anytime as we build.",
    emails: ["owenj@idocdentallab.com", "calebk@idocdentallab.com"],
  },
} as const;
