import Link from "next/link";
import {
  caseStudies,
  designerProfile,
  portfolioPrinciples,
} from "@/content/portfolio";

export default function Home() {
  return (
    <main className="portfolio-home">
      <header className="top-nav">
        <p className="brand-mark">{designerProfile.name}</p>
        <nav aria-label="Primary">
          <ul>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#approach">Approach</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow reveal">{designerProfile.title}</p>
        <h1 className="reveal reveal-delay-1">{designerProfile.tagline}</h1>
        <p className="hero-copy reveal reveal-delay-2">{designerProfile.intro}</p>

        <div className="hero-meta reveal reveal-delay-3">
          <p>
            <span>Location</span>
            {designerProfile.location}
          </p>
          <p>
            <span>Focus</span>
            End-to-end product design, activation, and platform UX
          </p>
          <p>
            <span>Now</span>
            Open to mid-level product design opportunities
          </p>
        </div>
      </section>

      <section className="selected-work" id="work" aria-labelledby="selected-work-title">
        <div className="section-intro">
          <p className="eyebrow">Selected Case Studies</p>
          <h2 id="selected-work-title">Projects built for scale, clarity, and measurable outcomes.</h2>
        </div>

        <div className="work-list">
          {caseStudies.map((study) => (
            <article key={study.slug} className="work-item">
              <p className="work-meta">
                <span>{study.category}</span>
                <span>{study.year}</span>
              </p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <ul>
                {study.impact.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
              <Link href={`/work/${study.slug}`}>Read Case Study</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach" aria-labelledby="approach-title">
        <div className="section-intro">
          <p className="eyebrow">How I Work</p>
          <h2 id="approach-title">Built for cross-functional teams that move fast without losing quality.</h2>
        </div>

        <div className="principles-grid">
          {portfolioPrinciples.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let&apos;s design products people can understand in seconds.</h2>
        <p>
          If you are hiring for product design roles, I&apos;d love to share deeper case
          studies and walkthroughs.
        </p>
        <a href={`mailto:${designerProfile.email}`}>{designerProfile.email}</a>
      </section>
    </main>
  );
}
