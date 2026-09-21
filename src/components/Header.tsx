import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { asset } from "../lib/asset";
import { profile } from "../data/profile";
import { sectionIds, sections, sectionNumber } from "../data/sections";
import { useActiveSection, useScrolled } from "../hooks/useActiveSection";

/** Initials used as the logo mark, e.g. "Bruno Furlan" -> "bf". */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toLowerCase();
}

export function Header() {
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu if the viewport grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 801px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container nav">
        <a className="brand" href="#top" aria-label={`${profile.name} — home`}>
          <span className="dot" aria-hidden="true" />
          {initials(profile.name)}
          <span style={{ color: "var(--accent)" }}>.dev</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        <nav id="primary-nav" className="nav-links" data-open={menuOpen}>
          {sections.map((section) => (
            <a
              key={section.id}
              className="nav-link"
              href={`#${section.id}`}
              aria-current={active === section.id}
              onClick={() => setMenuOpen(false)}
            >
              <span className="num">{sectionNumber(section.id)}.</span>
              {section.label}
            </a>
          ))}

          {profile.resumeUrl ? (
            <a
              className="btn nav-cta"
              href={asset(profile.resumeUrl)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
