import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <section className="section container" id="experience">
      <Reveal>
        <SectionHeading id="experience" title="Where I've worked" />
      </Reveal>

      <ol className="timeline">
        {experience.map((role, i) => (
          <Reveal key={role.id} as="li" delay={i * 90}>
            <div className="timeline-item">
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot" />
              </div>

              <div className="timeline-body">
                <p className="timeline-dates">
                  {role.start} — {role.end}
                  {role.location ? (
                    <span className="timeline-location">{role.location}</span>
                  ) : null}
                </p>

                <h3>
                  {role.role}
                  <span className="at"> at </span>
                  {role.companyUrl ? (
                    <a
                      className="company"
                      href={role.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {role.company}
                    </a>
                  ) : (
                    <span className="company">{role.company}</span>
                  )}
                </h3>

                {role.summary ? (
                  <p className="timeline-summary">{role.summary}</p>
                ) : null}

                <ul className="timeline-highlights">
                  {role.highlights.map((highlight, h) => (
                    <li key={h}>{highlight}</li>
                  ))}
                </ul>

                {role.links && role.links.length > 0 ? (
                  <div className="card-links">
                    {role.links.map((link) => (
                      <a
                        key={link.href}
                        className="link-inline"
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name="external" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}

                <ul className="tags">
                  {role.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
