import { Icon } from "./Icon";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-inner">
        {profile.availability ? (
          <p className="pill">
            <span className="status" aria-hidden="true" />
            {profile.availability}
          </p>
        ) : null}

        <p className="hero-greeting">Hi, my name is</p>

        <h1>{profile.name}</h1>
        <h2>
          <span className="grad">{profile.role}</span>
        </h2>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View my work
            <Icon name="arrow-down" />
          </a>

          <a className="btn" href={`mailto:${profile.email}`}>
            Get in touch
            <Icon name="mail" />
          </a>

          <ul className="hero-socials">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  className="icon-btn"
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
