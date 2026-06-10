import Image from "next/image";
import Link from "next/link";
import { behanceProjects } from "@/content/behance-projects";
import { customProjects } from "@/content/custom-projects";
import { designerProfile, portfolioPrinciples } from "@/content/portfolio";

const featuredProjects = [
  ...customProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
    image: project.heroImage,
    meta: "Product Design",
    count: project.year,
    description: project.subtitle,
  })),
  ...behanceProjects.map((project) => ({
    slug: project.slug,
    title: project.title,
    image: project.images[0] ?? project.coverImage,
    meta: "Behance Import",
    count: `${project.moduleCount} images`,
    description: "Imported from Behance with full inner-page image gallery.",
  })),
];

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
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <div className="hero-title-row reveal">
            <Image
              src="/profile.jpg"
              alt="Jessie Kuo profile photo"
              width={96}
              height={96}
              className="profile-photo"
              priority
            />
            <h1>product designer.</h1>
          </div>

          <p className="hero-copy reveal reveal-delay-1">
            Jessie designs thoughtful digital experiences across product,
            interface, and service journeys. Her work is grounded in clarity,
            empathy, and practical iteration.
          </p>

          <p className="hero-role reveal reveal-delay-2">
            Product Designer / UXUI Designer
          </p>
        </div>

        <a href="#work" className="scroll-arrow reveal reveal-delay-3" aria-label="Scroll to work">
          <span />
        </a>
      </section>

      <section className="selected-work" id="work" aria-labelledby="selected-work-title">
        <div className="section-intro">
          <p className="eyebrow">Work</p>
          <h2 id="selected-work-title">Projects</h2>
        </div>

        <div className="work-list">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="work-item">
              <Link href={`/work/${project.slug}`} className="work-cover">
                <Image
                  src={project.image}
                  alt={`${project.title} cover`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 960px) 100vw, 50vw"
                  quality={100}
                  unoptimized
                />
              </Link>
              <p className="work-meta">
                <span>{project.meta}</span>
                <span>{project.count}</span>
              </p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href={`/work/${project.slug}`}>Read Case Study</Link>
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
