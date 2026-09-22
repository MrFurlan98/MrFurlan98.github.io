import { useMemo, useState } from "react";
import { Icon } from "./Icon";
import { asset } from "../lib/asset";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const ALL = "All";

/**
 * Below this many projects the filter row is more chrome than help — a dozen
 * tag buttons above two cards just looks over-engineered. Add a third and
 * fourth project and the filters come back on their own.
 */
const MIN_PROJECTS_FOR_FILTERS = 4;

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="card-links">
      {project.repo ? (
        <a
          className="link-inline"
          href={project.repo}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          Source
        </a>
      ) : null}
      {project.demo ? (
        <a
          className="link-inline"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="external" />
          Live demo
        </a>
      ) : null}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="card-featured">
      <div className="body">
        <p className="card-eyebrow">
          Featured project
          {project.year ? <span className="year">{project.year}</span> : null}
        </p>

        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.detail ? <p>{project.detail}</p> : null}

        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <ProjectLinks project={project} />
      </div>

      {project.image ? (
        <div className="shot">
          <img
            src={asset(project.image)}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            width={1600}
            height={900}
          />
        </div>
      ) : null}
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="folder" aria-hidden="true">
          <Icon name="folder" />
        </span>

        <div className="card-actions">
          {project.repo ? (
            <a
              className="card-action"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source code on GitHub`}
            >
              <Icon name="github" />
            </a>
          ) : null}
          {project.demo ? (
            <a
              className="card-action"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
            >
              <Icon name="external" />
            </a>
          ) : null}
        </div>
      </div>

      <h3>
        {project.repo || project.demo ? (
          <a
            href={(project.demo ?? project.repo) as string}
            target="_blank"
            rel="noreferrer"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      <p>{project.summary}</p>

      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>(ALL);

  // Every tag that appears on at least one project, plus "All".
  const tags = useMemo(() => {
    const seen = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => seen.add(t)));
    return [ALL, ...Array.from(seen).sort((a, b) => a.localeCompare(b))];
  }, []);

  const visible = useMemo(
    () =>
      filter === ALL
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter],
  );

  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);
  const showFilters = projects.length >= MIN_PROJECTS_FOR_FILTERS;

  return (
    <section className="section container" id="projects">
      <Reveal>
        <SectionHeading id="projects" title="Things I've built" />
      </Reveal>

      {showFilters ? (
        <Reveal>
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by technology"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="chip"
                aria-pressed={filter === tag}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      ) : null}

      {featured.length > 0 ? (
        <div className="featured-list">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <FeaturedCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="card-grid">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <CompactCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}

      {visible.length === 0 ? (
        <p className="empty">No projects tagged &ldquo;{filter}&rdquo; yet.</p>
      ) : null}
    </section>
  );
}
