import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  behanceProjects,
  getBehanceProjectBySlug,
} from "@/content/behance-projects";
import {
  customProjects,
  getCustomProjectBySlug,
} from "@/content/custom-projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [...customProjects, ...behanceProjects].map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const customProject = getCustomProjectBySlug(slug);

  if (customProject) {
    return {
      title: `${customProject.title} | Jessie Kuo`,
      description: customProject.subtitle,
    };
  }

  const project = getBehanceProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Jessie Kuo`,
    description: `Imported Behance project with ${project.moduleCount} gallery images.`,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const customProject = getCustomProjectBySlug(slug);

  if (customProject) {
    return (
      <main className="case-study-page">
        <Link href="/" className="back-link case-study-back">
          Back to Portfolio
        </Link>

        <section className="case-study-hero" aria-label={`${customProject.title} hero image`}>
          <Image
            src={customProject.heroImage}
            alt={`${customProject.title} hero`}
            width={2400}
            height={1200}
            quality={100}
            priority
            unoptimized
          />
        </section>

        <article className="case-study-shell">
          <header className="case-study-intro">
            <div>
              <ul className="case-study-tags" aria-label="Project tags">
                {customProject.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <h1>{customProject.title}</h1>
              <p>{customProject.subtitle}</p>
            </div>
          </header>

          <dl className="case-study-meta">
            {customProject.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="case-study-short-story" aria-labelledby="short-story-title">
            <p className="case-study-short-eyebrow">
              {customProject.shortStory.eyebrow}
            </p>
            <h2 id="short-story-title">{customProject.shortStory.headline}</h2>
            <p>{customProject.shortStory.body}</p>

            <div className="case-study-highlight-grid">
              {customProject.shortStory.highlights.map((highlight) => (
                <article key={highlight.number}>
                  <h3>
                    <span>{highlight.number}</span>
                    {highlight.title}
                  </h3>
                  <p>{highlight.body}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="case-study-content">
            {customProject.sections.map((section) => (
              <section
                key={section.eyebrow}
                className={`case-study-feature-section${
                  section.image ? " has-real-image" : ""
                }`}
              >
                <div className="case-study-section-copy">
                  <p className="case-study-section-eyebrow">{section.eyebrow}</p>
                  <h2>{section.headline}</h2>
                  {section.body.map((paragraph, index) => (
                    <div key={paragraph}>
                      <p>{paragraph}</p>
                      {index === 0 && section.bullets ? (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>

                {section.image ? (
                  <Image
                    className="case-study-visual-image"
                    src={section.image}
                    alt={section.visual}
                    width={1920}
                    height={1080}
                    quality={100}
                  />
                ) : (
                  <div className="case-study-visual-placeholder" aria-label={section.visual}>
                    <span>Project visual placeholder</span>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
    );
  }

  const project = getBehanceProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="case-page">
      <div className="case-shell">
        <Link href="/" className="back-link">
          Back to Portfolio
        </Link>

        <header className="case-header">
          <p className="eyebrow">Behance Project</p>
          <h1>{project.title}</h1>
          <p>
            Imported from Behance with full module images. Original project link: {" "}
            <a href={project.url} target="_blank" rel="noreferrer">
              View on Behance
            </a>
          </p>

          <dl>
            <div>
              <dt>Source</dt>
              <dd>Behance</dd>
            </div>
            <div>
              <dt>Project Slug</dt>
              <dd>{project.slug}</dd>
            </div>
            <div>
              <dt>Cover</dt>
              <dd>Imported</dd>
            </div>
            <div>
              <dt>Gallery</dt>
              <dd>{project.moduleCount} images</dd>
            </div>
          </dl>
        </header>

        <section aria-labelledby="cover-title" className="case-section">
          <h2 id="cover-title">Cover</h2>
          <div className="case-cover">
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              width={1600}
              height={1200}
              quality={100}
              unoptimized
            />
          </div>
        </section>

        <section aria-labelledby="gallery-title" className="case-section">
          <h2 id="gallery-title">Full Gallery</h2>
          <div className="case-gallery">
            {project.images.map((src, index) => (
              <figure key={`${project.slug}-${index}`}>
                <Image
                  src={src}
                  alt={`${project.title} image ${index + 1}`}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 900px) 100vw, 900px"
                  quality={100}
                  unoptimized
                />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
