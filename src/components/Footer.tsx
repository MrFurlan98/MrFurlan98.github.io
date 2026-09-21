import { profile } from "../data/profile";

export function Footer() {
  const githubUrl = profile.socials.find((s) => s.icon === "github")?.href;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <p>
          Built with React &amp; Vite
          {githubUrl ? (
            <>
              {" · "}
              <a href={githubUrl} target="_blank" rel="noreferrer">
                Source on GitHub
              </a>
            </>
          ) : null}
        </p>
      </div>
    </footer>
  );
}
