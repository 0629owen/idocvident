import { PresentationHeader } from "@/components/presentation/PresentationHeader";
import {
  BulletList,
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
          </div>
        </Section>

        {/* 1 · Why Evident is bad & how it affects IDOC */}
        <Section id="why" className="bg-lab-green-50">
          <SectionHeading
            eyebrow={content.problem.eyebrow}
            title={content.problem.title}
            description={content.problem.lead}
          />
          <CardGrid cards={content.problem.cards} />
          <div className="mt-10 rounded-xl border border-lab-green-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground">
              {content.problem.impact.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {content.problem.impact.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-foreground"
                >
                  <span className="text-lab-green-600">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 2 · What we are going to do */}
        <Section id="what" className="bg-white">
          <SectionHeading
            eyebrow={content.whatWeWillDo.eyebrow}
            title={content.whatWeWillDo.title}
            description={content.whatWeWillDo.lead}
          />
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

        <Section className="bg-white">
          <SectionHeading
            eyebrow="Cross-team"
            title={content.features.title}
            description={content.features.lead}
          />
          <PillList items={content.features.pills} />
        </Section>

        {/* 3 · How we are going to do it */}
        <Section id="approach" className="bg-lab-green-50">
          <SectionHeading
            eyebrow={content.approach.eyebrow}
            title={content.approach.title}
            description={content.approach.lead}
          />
          <CardGrid cards={content.approach.cards} />
          <Quote>{content.approach.quote}</Quote>
        </Section>

        {/* 4 · Benefits: time & money */}
        <Section id="benefits" className="bg-white">
          <SectionHeading
            eyebrow={content.benefits.eyebrow}
            title={content.benefits.title}
            description={content.benefits.lead}
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-xl border border-lab-green-100 bg-lab-green-50/50 p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {content.benefits.time.title}
              </h3>
              <div className="mt-6">
                <BulletList items={content.benefits.time.items} />
              </div>
            </div>
            <div className="rounded-xl border border-lab-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">
                {content.benefits.money.title}
              </h3>
              <div className="mt-6 grid gap-4">
                {content.benefits.money.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-lab-green-100 bg-lab-green-50/50 p-4 text-center"
                  >
                    <p
                      className={`text-2xl font-semibold ${
                        stat.tone === "success"
                          ? "text-lab-green-700"
                          : "text-amber-700"
                      }`}
                    >
                      {stat.amount}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-lab-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <Quote>{content.benefits.money.quote}</Quote>
              <p className="mt-4 rounded-lg bg-lab-green-50 px-4 py-3 text-center text-sm font-medium text-lab-green-700">
                {content.benefits.money.combinedNote}
              </p>
              <p className="mt-4 text-center text-base font-semibold text-lab-green-700">
                {content.benefits.money.highlight}
              </p>
            </div>
          </div>
        </Section>

        {/* 5 · Ask for engagement */}
        <Section id="engage" className="bg-lab-green-600 text-white">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lab-green-100">
              {content.engagement.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {content.engagement.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-lab-green-50">
              {content.engagement.lead}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {content.engagement.asks.map((ask) => (
              <div
                key={ask.title}
                className="rounded-xl border border-white/20 bg-white/10 p-6"
              >
                <h3 className="text-lg font-semibold">{ask.title}</h3>
                <p className="mt-3 leading-relaxed text-lab-green-50">
                  {ask.body}
                </p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 border-l-4 border-white/40 pl-6 text-lg font-medium leading-relaxed text-lab-green-50 italic">
            {content.engagement.closing}
          </blockquote>
        </Section>

        {/* 6 · Timeline & conclusion */}
        <Section id="timeline" className="bg-white">
          <SectionHeading
            eyebrow={content.nextSteps.eyebrow}
            title={content.nextSteps.title}
            description={content.nextSteps.lead}
          />
          <ol className="space-y-4">
            {content.nextSteps.steps.map((step, index) => (
              <li
                key={step.text}
                className="flex gap-4 rounded-xl border border-lab-green-100 bg-lab-green-50/50 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lab-green-600 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div className="pt-0.5">
                  <p className="text-sm font-semibold text-lab-green-700">
                    {step.target}
                  </p>
                  <p className="mt-1 text-lg leading-relaxed text-foreground">
                    {step.text}
                  </p>
                </div>
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
