import { useEffect, useState } from "react";
import OrgChart, { type OrgNode } from "./components/OrgChart";

const EVIDENT_TREE: OrgNode = {
  label: "Evident",
  children: [
    {
      label: "Top Navigation",
      children: [
        { label: "Cases" },
        { label: "Operations" },
        { label: "Financials" },
        { label: "Reports" },
      ],
    },
  ],
};

const NAV_SECTIONS = ["Cases", "Operations", "Financials", "Reports"] as const;
type NavSection = (typeof NAV_SECTIONS)[number];

const SECTION_TOPICS: Record<NavSection, string[]> = {
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

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "problem", label: "Problem" },
  { id: "cost", label: "Cost" },
  { id: "cs", label: "CS" },
  { id: "finance", label: "Finance" },
  { id: "production", label: "Production" },
  { id: "shipping", label: "Shipping" },
  { id: "features", label: "Features" },
  { id: "vision", label: "Vision" },
  { id: "blank", label: "Evident" },
  { id: "section-detail", label: "Topics" },
];

export default function App() {
  const [active, setActive] = useState("hero");
  const [selectedNavSection, setSelectedNavSection] = useState<NavSection>("Cases");

  const handleNavSectionClick = (label: string) => {
    if (!NAV_SECTIONS.includes(label as NavSection)) return;
    setSelectedNavSection(label as NavSection);
    document.getElementById("section-detail")?.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = SECTIONS.findIndex(({ id }) => id === active);

  const goToSlide = (index: number) => {
    const section = SECTIONS[index];
    if (!section) return;
    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPrevSlide = () => {
    if (activeIndex > 0) goToSlide(activeIndex - 1);
  };

  const goToNextSlide = () => {
    if (activeIndex < SECTIONS.length - 1) goToSlide(activeIndex + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: 0.4 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="slide-nav" aria-label="Slide navigation">
        <button
          type="button"
          className="slide-arrow"
          onClick={goToPrevSlide}
          disabled={activeIndex <= 0}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 16l-6-6h12l-6 6z" />
          </svg>
        </button>

        <div className="nav-dots">
          {SECTIONS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-label={label}>
              <button
                type="button"
                className={`nav-dot${active === id ? " active" : ""}`}
                aria-current={active === id ? "true" : undefined}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="slide-arrow"
          onClick={goToNextSlide}
          disabled={activeIndex >= SECTIONS.length - 1}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 8l6 6H6l6-6z" />
          </svg>
        </button>
      </nav>

      <main className="presentation">
        <section id="hero" className="slide slide-dark" style={{ position: "relative" }}>
          <div className="slide-inner">
            <div className="hero-logo">iDoc</div>
            <span className="badge">Internal proposal</span>
            <h1>Replace Evident.<br />Build iDoc.</h1>
            <p className="lead">
              A custom lab platform — lower cost, faster workflows, built around how your team actually works.
            </p>
            <div className="pill-list">
              <span className="pill">Lower monthly cost</span>
              <span className="pill">Built for your workflow</span>
              <span className="pill">Future-proof & secure</span>
            </div>
          </div>
          <div className="scroll-hint">Scroll down</div>
        </section>

        <section id="problem" className="slide">
          <div className="slide-inner">
            <span className="badge">The problem</span>
            <h2>Evident gets in the way</h2>
            <p className="lead">
              Every department raised the same issues: slow, unreliable, inflexible — and getting more expensive.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Reliability & speed</h3>
                <ul>
                  <li>Kicks users out and loses unsaved work</li>
                  <li>Slow performance disrupts daily tasks</li>
                  <li>No undo — mistakes are hard to reverse</li>
                </ul>
              </div>
              <div className="card">
                <h3>Workflow friction</h3>
                <ul>
                  <li>Cases start with missing info</li>
                  <li>Remakes lack a clear communication trail</li>
                  <li>Government vs. private cases poorly divided</li>
                </ul>
              </div>
              <div className="card">
                <h3>Finance gaps</h3>
                <ul>
                  <li>Inaccurate sales reports (especially cash)</li>
                  <li>Hard to apply payments across invoices</li>
                  <li>Monthly reports still need Excel cleanup</li>
                </ul>
              </div>
              <div className="card">
                <h3>Unused & outdated</h3>
                <ul>
                  <li>Doctor portals rarely used</li>
                  <li>Reports and features teams don’t touch</li>
                  <li>Rising fees for tools nobody needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="cost" className="slide slide-alt">
          <div className="slide-inner">
            <span className="badge">Cost benefit</span>
            <h2>Pay less. Own more.</h2>
            <p className="lead">
              Evident fees climb with every add-on. iDoc runs on infrastructure you control — at a fraction of the cost.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="stat-value warning">$1,500+</div>
                <div className="stat-label">Evident / month + extras</div>
              </div>
              <div className="stat">
                <div className="stat-value warning">Up to $2,000</div>
                <div className="stat-label">With photo AI add-on</div>
              </div>
              <div className="stat">
                <div className="stat-value success">~$100</div>
                <div className="stat-label">iDoc / month (hosting + tools)</div>
              </div>
            </div>
            <p className="quote">
              Build internally — choose what changes, keep costs under control.
            </p>
          </div>
        </section>

        <section id="cs" className="slide">
          <div className="slide-inner">
            <span className="badge">Customer Service</span>
            <h2>Faster intake. Smarter archives.</h2>
            <p className="lead">
              Full case history when remakes need it — archived by warranty, always searchable.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Case intake &amp; communication</h3>
                <ul>
                  <li>Quick entry, auto product codes, scan → new case</li>
                  <li>Separate internal vs. doctor-visible notes</li>
                  <li>Remake &amp; clone with teeth diagram check</li>
                  <li>File uploads with shareable links for offices</li>
                </ul>
              </div>
              <div className="card">
                <h3>Search, history &amp; automation</h3>
                <ul>
                  <li>Fuzzy search, patient tracking, warranty-based archive</li>
                  <li>Auto-save everywhere — no more lost work</li>
                  <li>Doctor logins to view cases &amp; tracking</li>
                  <li>Tax rules &amp; calendar updates when policy changes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="finance" className="slide slide-alt">
          <div className="slide-inner">
            <span className="badge">Finance</span>
            <h2>Reports that match reality.</h2>
            <p className="lead">
              Aged balances, collections, and statements — ready to use, not fixed in Excel every month.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Invoicing &amp; payments</h3>
                <ul>
                  <li>Invoice &amp; lab ticket in one print flow</li>
                  <li>Apply payments without hunting invoice numbers</li>
                  <li>Autopay reminders and credit-limit → COD rules</li>
                  <li>Ctrl+Z / undo for finance corrections</li>
                </ul>
              </div>
              <div className="card">
                <h3>Reports, statements &amp; exports</h3>
                <ul>
                  <li>Aged balances clean and ready by the 20th</li>
                  <li>Collections split: Private / PDS / Government</li>
                  <li>Statements tailored per customer type</li>
                  <li>CPA-ready Excel, payroll export, banking reconcile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="production" className="slide">
          <div className="slide-inner">
            <span className="badge">Production &amp; Technicians</span>
            <h2>Less chasing. More making.</h2>
            <p className="lead">
              Scan info, due-date alerts, and clear status — without slowing down the floor.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Floor workflow</h3>
                <ul>
                  <li>Flag missing info and bad scans before work starts</li>
                  <li>Due-date alerts right after scan</li>
                  <li>Technician notes separate from dentist notes</li>
                  <li>Tasks assigned by role, not verbal handoffs</li>
                </ul>
              </div>
              <div className="card">
                <h3>Tracking &amp; outsourcing</h3>
                <ul>
                  <li>Case location and remake tracking built in</li>
                  <li>Better CS ↔ production comms to cut remakes</li>
                  <li>Structured CAD download instead of email sends</li>
                  <li>Current supplier lists and portal integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="shipping" className="slide slide-alt">
          <div className="slide-inner">
            <span className="badge">Shipping</span>
            <h2>Labels, tracking, fewer mistakes.</h2>
            <p className="lead">Right label, right address — no re-typing, no guessing.</p>
            <div className="grid-3">
              <div className="card">
                <h3>UPS integration</h3>
                <p>End-of-day upload. Tracking shared with dental offices automatically.</p>
              </div>
              <div className="card">
                <h3>Correct routing</h3>
                <p>Cases labeled with the right customer address every time.</p>
              </div>
              <div className="card">
                <h3>Driver reports</h3>
                <p>Daily schedules kept for a few weeks — useful history, no clutter.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="slide">
          <div className="slide-inner">
            <span className="badge">Platform-wide</span>
            <h2>What every team asked for</h2>
            <p className="lead">Not extras — requirements that came up in every interview.</p>
            <div className="pill-list">
              <span className="pill">Auto-save</span>
              <span className="pill">Undo / Ctrl+Z</span>
              <span className="pill">Teeth diagram</span>
              <span className="pill">Clone &amp; remake</span>
              <span className="pill">Doctor portals</span>
              <span className="pill">Internal messenger</span>
              <span className="pill">Smart notifications</span>
              <span className="pill">Secure storage</span>
              <span className="pill">Batch print tickets</span>
              <span className="pill">Urgent case priority</span>
              <span className="pill">Warranty archive</span>
              <span className="pill">Scan → auto case</span>
            </div>
            <p className="quote" style={{ marginTop: 28 }}>
              Change is hard — but Evident’s kick-outs, slowness, and rising fees already hurt. iDoc is built from how your people work.
            </p>
          </div>
        </section>

        <section id="vision" className="slide slide-dark">
          <div className="slide-inner">
            <span className="badge">The vision</span>
            <h2>Your lab’s operating system</h2>
            <p className="lead">
              Not a growing SaaS bill — a platform you shape as your business and technology change.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Customize today</h3>
                <p>Fix what CS, Finance, Production, and Shipping raised — on your timeline.</p>
              </div>
              <div className="card">
                <h3>Adapt tomorrow</h3>
                <p>AI, scan tools, tax rules, new customer types — change what you need, when you need it.</p>
              </div>
            </div>
            <div className="stat-row" style={{ marginTop: 36 }}>
              <div className="stat">
                <div className="stat-value success">~93%</div>
                <div className="stat-label">Monthly savings vs. Evident</div>
              </div>
              <div className="stat">
                <div className="stat-value">1</div>
                <div className="stat-label">Platform for every department</div>
              </div>
            </div>
            <p className="closing-line">
              Vercel + Supabase. Scan integration in progress. Replace Evident piece by piece — on your terms.
            </p>
          </div>
        </section>

        <section id="blank" className="slide slide-alt slide-tree" aria-label="Evident site tree">
          <div className="slide-inner slide-inner-full">
            <span className="badge">Evident structure</span>
            <h2>Cite Tree</h2>
            <p className="tree-hint">Click a section to view its pages</p>
            <div className="org-chart-container org-chart-container--nav">
              <OrgChart
                {...EVIDENT_TREE}
                large
                clickableLabels={[...NAV_SECTIONS]}
                onLabelClick={handleNavSectionClick}
              />
            </div>
          </div>
        </section>

        <section id="section-detail" className="slide slide-alt slide-tree" aria-label="Section topics">
          <div className="slide-inner slide-inner-full">
            <span className="badge">Evident structure</span>
            <h2>{selectedNavSection}</h2>
            <p className="tree-hint">
              Pages under {selectedNavSection} —{" "}
              <a href="#blank" className="back-link">
                back to navigation
              </a>
            </p>
            <div className="topic-grid">
              {SECTION_TOPICS[selectedNavSection].map((topic) => (
                <div key={topic} className="topic-box">
                  {topic}
                </div>
              ))}
            </div>
            <div className="section-tabs">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section}
                  type="button"
                  className={`section-tab${selectedNavSection === section ? " active" : ""}`}
                  onClick={() => setSelectedNavSection(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
