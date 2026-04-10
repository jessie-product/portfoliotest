import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/content/portfolio";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Jessie Kuo`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="case-page">
      <div className="case-shell">
        <Link href="/" className="back-link">
          Back to Portfolio
        </Link>

        <header className="case-header">
          <p className="eyebrow">{caseStudy.category}</p>
          <h1>{caseStudy.title}</h1>
          <p>{caseStudy.summary}</p>

          <dl>
            <div>
              <dt>Role</dt>
              <dd>{caseStudy.role}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{caseStudy.duration}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{caseStudy.team}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{caseStudy.year}</dd>
            </div>
          </dl>
        </header>

        <section aria-labelledby="impact-title" className="case-section">
          <h2 id="impact-title">Impact</h2>
          <ul className="impact-list">
            {caseStudy.impact.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="problem-title" className="case-section">
          <h2 id="problem-title">Problem</h2>
          <p>{caseStudy.problem}</p>
        </section>

        <section aria-labelledby="constraints-title" className="case-section">
          <h2 id="constraints-title">Constraints</h2>
          <ul>
            {caseStudy.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="approach-title" className="case-section">
          <h2 id="approach-title">Approach</h2>
          <div className="approach-steps">
            {caseStudy.approach.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="outcome-title" className="case-section">
          <h2 id="outcome-title">Outcome</h2>
          <p>{caseStudy.outcome}</p>
        </section>

        <section aria-labelledby="reflection-title" className="case-section">
          <h2 id="reflection-title">Reflection</h2>
          <p>{caseStudy.reflection}</p>
        </section>
      </div>
    </main>
  );
}
