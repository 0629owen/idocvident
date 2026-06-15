import { presentationContent } from "@/lib/presentation-content";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lab-green-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-lab-muted">
          {description}
        </p>
      )}
    </div>
  );
}

type StatCardProps = {
  label: string;
  amount: string;
  period: string;
  description: string;
  highlight?: string;
};

export function StatCard({
  label,
  amount,
  period,
  description,
  highlight,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-lab-green-100 bg-white p-8 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-lab-green-600">
        {label}
      </p>
      {highlight && (
        <p className="mt-4 text-base font-medium text-foreground">{highlight}</p>
      )}
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-5xl font-semibold tracking-tight text-lab-green-700 sm:text-6xl">
          {amount}
        </span>
        <span className="text-lg text-lab-muted">{period}</span>
      </div>
      <p className="mt-6 leading-relaxed text-lab-muted">{description}</p>
    </div>
  );
}

export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lab-green-500" />
          <span className="text-lg leading-relaxed text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CardGrid({
  cards,
}: {
  cards: readonly {
    title: string;
    items?: readonly string[];
    body?: string;
  }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-lab-green-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
          {card.body && (
            <p className="mt-3 leading-relaxed text-lab-muted">{card.body}</p>
          )}
          {card.items && (
            <ul className="mt-4 space-y-2">
              {card.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-foreground">
                  <span className="text-lab-green-600">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function PillList({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-lab-green-100 bg-lab-green-50 px-4 py-2 text-sm font-medium text-lab-green-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-8 border-l-4 border-lab-green-600 pl-6 text-lg font-medium leading-relaxed text-foreground italic">
      {children}
    </blockquote>
  );
}

export function PresentationFooter() {
  const { labName, productName } = presentationContent;

  return (
    <footer className="border-t border-lab-green-100 bg-lab-green-50 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-foreground">{labName}</p>
        <p className="text-sm text-lab-muted">
          {productName} — internal presentation
        </p>
      </div>
    </footer>
  );
}
