import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export function About() {
  const githubUrl = profile.socials.find((s) => s.icon === "github")?.href;

  return (
    <section className="section container" id="about">
      <Reveal>
        <SectionHeading id="about" title="About me" />
      </Reveal>

      <div className="about-grid">
        <Reveal>
          <div className="about-text">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="card-terminal">
            <div className="terminal-bar">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span className="title">whoami</span>
            </div>

            <dl className="terminal-body">
              <div className="row">
                <dt className="key">name</dt>
                <dd className="val">{profile.name}</dd>
              </div>
              <div className="row">
                <dt className="key">role</dt>
                <dd className="val">{profile.role}</dd>
              </div>
              <div className="row">
                <dt className="key">location</dt>
                <dd className="val">{profile.location}</dd>
              </div>
              <div className="row">
                <dt className="key">projects</dt>
                <dd className="val">{projects.length} shipped</dd>
              </div>
              {githubUrl ? (
                <div className="row">
                  <dt className="key">github</dt>
                  <dd className="val">
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      {githubUrl.replace("https://github.com/", "@")}
                    </a>
                  </dd>
                </div>
              ) : null}
              <div className="row">
                <dt className="key">email</dt>
                <dd className="val">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
