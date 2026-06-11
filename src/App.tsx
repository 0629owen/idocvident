import { useEffect, useState } from "react";

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
];

export default function App() {
  const [active, setActive] = useState("hero");

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
      <nav className="nav-dots" aria-label="Slide navigation">
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} aria-label={label}>
            <button
              type="button"
              className={`nav-dot${active === id ? " active" : ""}`}
              aria-current={active === id ? "true" : undefined}
            />
          </a>
        ))}
      </nav>

      <main className="presentation">
        <section id="hero" className="slide slide-dark" style={{ position: "relative" }}>
          <div className="slide-inner">
            <div className="hero-logo">iDoc</div>
            <span className="badge">Internal proposal</span>
            <h1>Replace Evident.<br />Build what your lab actually needs.</h1>
            <p className="lead">
              A custom dental lab platform shaped by real feedback from Customer Service,
              Finance, Production, and Shipping — not a one-size-fits-all vendor contract.
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
              Across every department, the same themes came up: slow performance, lost work,
              limited flexibility, and rising costs as features get bolted on.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Reliability & speed</h3>
                <ul>
                  <li>Kicks users out and loses unsaved work</li>
                  <li>Slow website disrupts daily tasks</li>
                  <li>Security concerns after past incidents</li>
                  <li>No undo — mistakes are hard to reverse</li>
                </ul>
              </div>
              <div className="card">
                <h3>Workflow friction</h3>
                <ul>
                  <li>Case intake missing info before work starts</li>
                  <li>Remakes lack communication trail</li>
                  <li>Government vs. private cases poorly divided</li>
                  <li>Production staff find computers “in the way”</li>
                </ul>
              </div>
              <div className="card">
                <h3>Finance gaps</h3>
                <ul>
                  <li>Inaccurate sales reports (especially cash)</li>
                  <li>Hard to apply payments across invoices</li>
                  <li>Statement rules differ by customer type</li>
                  <li>Monthly reporting still needs heavy Excel cleanup</li>
                </ul>
              </div>
              <div className="card">
                <h3>Unused & outdated</h3>
                <ul>
                  <li>Doctor portals rarely used vs. phone calls</li>
                  <li>Materials stock tracking not in use</li>
                  <li>Many reports generated but seldom referenced</li>
                  <li>Features teams don’t touch pile up anyway</li>
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
              Evident costs keep climbing as AI and add-ons expand. An internal iDoc platform
              flips that trend — hosted on modern infrastructure you control.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="stat-value">~$1,500</div>
                <div className="stat-label">Evident today / month + extras (e.g. smart scan)</div>
              </div>
              <div className="stat">
                <div className="stat-value success">~$100</div>
                <div className="stat-label">iDoc estimate — Vercel, Supabase, email, AI tools</div>
              </div>
            </div>
            <p className="quote">
              “As Evident adds features, the price keeps rising. When we build internally,
              we choose what to change — and costs stay under our control.”
            </p>
          </div>
        </section>

        <section id="cs" className="slide">
          <div className="slide-inner">
            <span className="badge">Customer Service</span>
            <h2>Faster intake. Smarter archives.</h2>
            <p className="lead">
              CS needs full case history for remakes years later — but not everything forever.
              iDoc archives by warranty while keeping what matters searchable.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Case intake</h3>
                <ul>
                  <li>Pop-up quick entry with copy &amp; fast-add</li>
                  <li>Auto product codes → crown, bridge, denture, etc.</li>
                  <li>Government / private indicators on every product</li>
                  <li>Link scan program → auto-create new cases</li>
                </ul>
              </div>
              <div className="card">
                <h3>Communication</h3>
                <ul>
                  <li>Separate notes: internal iDoc vs. doctor-visible</li>
                  <li>Upload files → shareable link for dental offices</li>
                  <li>Remake &amp; clone buttons with teeth diagram check</li>
                  <li>See who last changed a case</li>
                </ul>
              </div>
              <div className="card">
                <h3>Search &amp; history</h3>
                <ul>
                  <li>Keep fuzzy name search (%abc%) &amp; patient tracking</li>
                  <li>Recent cases view + full archived history</li>
                  <li>Organize by warranty status</li>
                  <li>Complaint log with purpose beyond just closing tickets</li>
                </ul>
              </div>
              <div className="card">
                <h3>Automation</h3>
                <ul>
                  <li>Auto-save everywhere — no more lost work</li>
                  <li>Tax rules updatable when policy changes</li>
                  <li>Calendar blocks holidays &amp; working days</li>
                  <li>Dental office logins to view their own cases &amp; tracking</li>
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
              Angie’s workflow — aged balances, credits, collections, statements — shouldn’t
              need a spreadsheet rescue every month.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Invoicing &amp; payments</h3>
                <ul>
                  <li>Invoice &amp; lab ticket share one print/login flow</li>
                  <li>Apply payments without hunting invoice numbers</li>
                  <li>Autopay reminders for card-on-file accounts</li>
                  <li>Credit limits → COD terms when needed</li>
                </ul>
              </div>
              <div className="card">
                <h3>Reports Angie actually uses</h3>
                <ul>
                  <li>Aged balances — clean, no negatives, ready by the 20th</li>
                  <li>Detailed credit reports (product + sales tax split)</li>
                  <li>Collections split: Private / PDS / Government</li>
                  <li>Product activity for sales tax — accurate cash handling</li>
                </ul>
              </div>
              <div className="card">
                <h3>Statements per customer type</h3>
                <ul>
                  <li>PDS: detailed — products under each invoice</li>
                  <li>Schools, labs, private: summary option</li>
                  <li>Per-office email rules (Wisconsin vs. separate sends)</li>
                  <li>Preview before irreversible print/run</li>
                </ul>
              </div>
              <div className="card">
                <h3>Exports &amp; payroll</h3>
                <ul>
                  <li>One Excel sheet for CPA with city &amp; state</li>
                  <li>Piecework payroll auto-export</li>
                  <li>Alloy file input, banking reconcile</li>
                  <li>Ctrl+Z / undo for finance corrections</li>
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
              Technicians need scan info, due-date alerts, and clear status — without living
              at a desktop that slows down the floor.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Before work starts</h3>
                <ul>
                  <li>Surface missing info that causes delays upfront</li>
                  <li>Flag unusable scans with common problem types</li>
                  <li>Auto-pull case details after scan</li>
                  <li>Tech login for scan tracking &amp; efficiency eval</li>
                </ul>
              </div>
              <div className="card">
                <h3>During production</h3>
                <ul>
                  <li>Due-date notification right after scan</li>
                  <li>Rescan / remill task without manual workarounds</li>
                  <li>Technician notes separate from dentist notes</li>
                  <li>Task assignment by role, not verbal chaos</li>
                </ul>
              </div>
              <div className="card">
                <h3>Remakes &amp; status</h3>
                <ul>
                  <li>Clear case location &amp; replacement tracking</li>
                  <li>Reduce remakes with better CS ↔ production comms</li>
                  <li>Skip-stage option where workflow allows</li>
                  <li>Open tasks auto-fix with correct dates</li>
                </ul>
              </div>
              <div className="card">
                <h3>Outsourcing (ADL)</h3>
                <ul>
                  <li>Replace email CAD sends with structured download</li>
                  <li>Separate outsourcing lists</li>
                  <li>Google Drive or direct portal integration</li>
                  <li>Supplier list kept current &amp; easy to reference</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="shipping" className="slide slide-alt">
          <div className="slide-inner">
            <span className="badge">Shipping</span>
            <h2>Labels, tracking, fewer mistakes.</h2>
            <p className="lead">
              Shipping shouldn’t mean re-typing addresses or hunting which case goes where.
            </p>
            <div className="grid-3">
              <div className="card">
                <h3>UPS integration</h3>
                <p>Link &amp; track with end-of-day upload. Tracking numbers visible to dental offices automatically.</p>
              </div>
              <div className="card">
                <h3>Correct routing</h3>
                <p>Cases labeled with the right customer address — fewer wrong shipments and manual fixes.</p>
              </div>
              <div className="card">
                <h3>Driver reports</h3>
                <p>Daily schedule reports kept for a few weeks — enough history without cluttering the system.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="slide">
          <div className="slide-inner">
            <span className="badge">Platform-wide</span>
            <h2>Everything teams asked for — in one place.</h2>
            <p className="lead">
              These aren’t nice-to-haves. They came up again and again across departments.
            </p>
            <div className="pill-list">
              <span className="pill">Auto-save</span>
              <span className="pill">Undo / Ctrl+Z</span>
              <span className="pill">Teeth diagram</span>
              <span className="pill">Clone &amp; remake</span>
              <span className="pill">Doctor portals</span>
              <span className="pill">Internal messenger</span>
              <span className="pill">Smart notifications</span>
              <span className="pill">Big secure storage</span>
              <span className="pill">Batch print tickets</span>
              <span className="pill">Urgent case priority</span>
              <span className="pill">Warranty-based archive</span>
              <span className="pill">Scan → auto case</span>
            </div>
            <p className="quote" style={{ marginTop: 32 }}>
              Teams were honest: adapting to a new system is a big change. But Evident’s
              kick-outs, slowness, and rising fees mean the pain of staying is already real.
              iDoc is built from how your people actually work.
            </p>
          </div>
        </section>

        <section id="vision" className="slide slide-dark">
          <div className="slide-inner">
            <span className="badge">The vision</span>
            <h2>iDoc: your lab’s operating system.</h2>
            <p className="lead">
              Not a generic dental SaaS bill that grows every year. A platform you shape as
              the industry, technology, and your business change.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3>Customize today</h3>
                <p>Solve the problems CS, Finance, Production, and Shipping described — not a vendor roadmap.</p>
              </div>
              <div className="card">
                <h3>Adapt tomorrow</h3>
                <p>AI, new scan tools, tax policy, new customer types — change what you need, when you need it.</p>
              </div>
            </div>
            <div className="stat-row" style={{ marginTop: 40 }}>
              <div className="stat">
                <div className="stat-value success">~93%</div>
                <div className="stat-label">Estimated monthly savings vs. Evident</div>
              </div>
              <div className="stat">
                <div className="stat-value">1</div>
                <div className="stat-label">Platform for every department</div>
              </div>
            </div>
            <p style={{ marginTop: 40, color: "rgba(255,255,255,0.9)", fontSize: "0.95rem" }}>
              Built on Vercel + Supabase. Scan integration already in progress.
              Ready to replace Evident piece by piece — on your terms.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
