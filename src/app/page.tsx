import Link from "next/link";
import { EvidentTreeSection } from "@/components/presentation/EvidentTreeSection";
import { PresentationHeader } from "@/components/presentation/PresentationHeader";
import {
  CardGrid,
  PillList,
  PresentationFooter,
  Quote,
  Section,
  SectionHeading,
} from "@/components/presentation/Section";
import { presentationContent } from "@/lib/presentation-content";

export default function Home() {
  const content = presentationContent;

  return (
    <>
      <PresentationHeader />

      <main>
        <Section className="bg-white pt-16 sm:pt-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-lab-green-50 px-4 py-1.5 text-sm font-medium text-lab-green-700">
              {content.labName} · Presented by {content.presenter}
            </p>
            <h1 className="whitespace-pre-line text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-lab-muted sm:text-2xl">
              {content.hero.subtitle}
            </p>
            <div className="mt-8">
              <PillList items={content.hero.pills} />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#cost"
                className="inline-flex items-center rounded-full bg-lab-green-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lab-green-700"
              >
                See the savings
              </Link>
              <Link
                href="#why"
                className="inline-flex items-center rounded-full border border-lab-green-100 px-6 py-3 text-sm font-semibold text-lab-green-700 transition-colors hover:bg-lab-green-50"
              >
                Why we&apos;re changing
              </Link>
            </div>
          </div>
        </Section>

        <Section id="why" className="bg-lab-green-50">
          <SectionHeading
            eyebrow="The problem"
            title={content.problem.title}
            description={content.problem.lead}
          />
          <CardGrid cards={content.problem.cards} />
        </Section>

        <Section id="cost" className="bg-white">
          <SectionHeading
            eyebrow="Cost benefit"
            title={content.savings.title}
            description={content.savings.lead}
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {content.savings.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-lab-green-100 bg-lab-green-50/50 p-6 text-center"
              >
                <p
                  className={`text-3xl font-semibold ${
                    stat.tone === "success"
                      ? "text-lab-green-700"
                      : "text-amber-700"
                  }`}
                >
                  {stat.amount}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-lab-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Quote>{content.savings.quote}</Quote>
          <p className="mt-8 rounded-xl bg-lab-green-50 px-6 py-4 text-center text-lg font-medium text-lab-green-700">
            {content.savings.combinedNote}
          </p>
        </Section>

        {content.departments.map((dept) => (
          <Section
            key={dept.id}
            id={dept.id}
            className={dept.altBackground ? "bg-lab-green-50" : "bg-white"}
          >
            <SectionHeading
              eyebrow={dept.eyebrow}
              title={dept.title}
              description={dept.lead}
            />
            <CardGrid cards={dept.cards} />
          </Section>
        ))}

        <Section id="features" className="bg-white">
          <SectionHeading
            eyebrow="Platform-wide"
            title={content.features.title}
            description={content.features.lead}
          />
          <PillList items={content.features.pills} />
          <Quote>{content.features.quote}</Quote>
        </Section>

        <Section id="vision" className="bg-lab-green-600 text-white">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lab-green-100">
              The vision
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {content.vision.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-lab-green-50">
              {content.vision.lead}
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {content.vision.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/20 bg-white/10 p-6"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-lab-green-50">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {content.vision.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-semibold">{stat.amount}</p>
                <p className="mt-2 text-sm text-lab-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lab-green-50">{content.vision.footer}</p>
        </Section>

        <Section id="evident-tree" className="bg-lab-green-50">
          <SectionHeading
            eyebrow="Evident structure"
            title="Cite Tree"
            description="What Evident exposes today — mapped from IDOC's menu."
          />
          <EvidentTreeSection />
        </Section>

        <Section id="next-steps" className="bg-white">
          <SectionHeading
            eyebrow="Moving forward"
            title={content.nextSteps.title}
          />
          <ol className="space-y-4">
            {content.nextSteps.steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-lab-green-100 bg-lab-green-50/50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lab-green-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-lg leading-relaxed text-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <Quote>{content.nextSteps.closing}</Quote>
        </Section>
      </main>

      <PresentationFooter />
    </>
  );
}
