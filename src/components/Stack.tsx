import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "../data/profile";

export function Stack() {
  return (
    <section className="section container" id="stack">
      <Reveal>
        <SectionHeading id="stack" title="Tools I work with" />
      </Reveal>

      <div className="stack-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="stack-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
