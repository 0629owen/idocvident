export const presentationContent = {
  labName: "IDOC",
  productName: "iDocvident",
  presenter: "Owen Jeung",
  tagline: "A lab-built system, designed for how we actually work",

  hero: {
    title: "Replacing Evident",
    subtitle:
      "Take control of our workflow, our costs, and our future — with a system built for IDOC.",
  },

  problem: {
    title: "Why change?",
    points: [
      "We depend on Evident for daily operations — pricing and features are outside our control.",
      "Add-on features like SmartEvident can introduce large new costs with little warning.",
      "Our workflows should fit IDOC, not the other way around.",
    ],
  },

  savings: {
    title: "Immediate savings",
    amount: "~$1,500",
    period: "per month",
    description:
      "Moving off Evident saves roughly $1,500 every month starting now — real money we can reinvest in the lab.",
  },

  futureCost: {
    title: "Costs we avoid",
    feature: "SmartEvident — lab slip scanning via photo",
    amount: "~$2,000",
    period: "per month",
    description:
      "Evident's SmartEvident feature alone would cost around $2,000/month. Building our own scanning workflow avoids that recurring charge entirely.",
  },

  vision: {
    title: "Our own system",
    points: [
      "Built around IDOC's cases, technicians, and managers — not a generic vendor product.",
      "We own the roadmap: prioritize what saves time on the bench and clarity in the office.",
      "No surprise price increases for features we need to stay competitive.",
    ],
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
