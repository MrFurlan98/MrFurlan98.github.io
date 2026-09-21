import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact">
            <SectionHeading id="contact" title="Get in touch" showRule={false} />

            <p>
              I&rsquo;m currently open to new opportunities and interesting
              collaborations. Whether you have a question, a role in mind, or
              just want to say hello, my inbox is always open.
            </p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Icon name="mail" />
                {profile.email}
              </a>

              {profile.socials
                .filter((s) => s.icon !== "mail")
                .map((social) => (
                  <a
                    key={social.label}
                    className="btn"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={social.icon} />
                    {social.label}
                  </a>
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
