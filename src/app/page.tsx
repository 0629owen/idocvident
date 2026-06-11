import Link from "next/link";
import { PresentationHeader } from "@/components/presentation/PresentationHeader";
import {
  BulletList,
  PresentationFooter,
  Section,
  SectionHeading,
  StatCard,
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
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-lab-muted sm:text-2xl">
              {content.hero.subtitle}
            </p>
            <p className="mt-4 text-lg text-lab-green-600">{content.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#savings"
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
            description="Evident has served us, but the cost and lack of control are holding IDOC back."
          />
          <BulletList items={content.problem.points} />
        </Section>

        <Section id="savings" className="bg-white">
          <SectionHeading eyebrow="Today" title={content.savings.title} />
          <div className="grid gap-8 lg:grid-cols-2">
            <StatCard
              label={content.savings.title}
              amount={content.savings.amount}
              period={content.savings.period}
              description={content.savings.description}
            />
            <StatCard
              label={content.futureCost.title}
              amount={content.futureCost.amount}
              period={content.futureCost.period}
              highlight={content.futureCost.feature}
              description={content.futureCost.description}
            />
          </div>
          <p className="mt-8 rounded-xl bg-lab-green-50 px-6 py-4 text-center text-lg font-medium text-lab-green-700">
            Combined: roughly{" "}
            <span className="font-semibold text-lab-green-700">~$3,500/month</span>{" "}
            in recurring costs we can avoid or eliminate
          </p>
        </Section>

        <Section id="vision" className="bg-lab-green-50">
          <SectionHeading
            eyebrow={content.productName}
            title={content.vision.title}
            description={`${content.productName} is not a copy of Evident — it's a system shaped by how ${content.labName} actually runs.`}
          />
          <BulletList items={content.vision.points} />
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
          <blockquote className="mt-12 border-l-4 border-lab-green-600 pl-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            {content.nextSteps.closing}
          </blockquote>
        </Section>
      </main>

      <PresentationFooter />
    </>
  );
}
