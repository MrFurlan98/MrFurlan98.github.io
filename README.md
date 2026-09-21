# Portfolio

A personal portfolio site built with React, TypeScript and Vite, deployed to
GitHub Pages.

## Running it locally

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

```bash
npm run build     # type-check and build to dist/
npm run preview   # serve the built site locally
```

## Where to edit things

Almost everything you'll want to change lives in two files:

| File | What's in it |
| --- | --- |
| `src/data/profile.ts` | Your name, role, tagline, about paragraphs, socials, email, resume link, skill groups |
| `src/data/projects.ts` | The project list |

Beyond that:

- `index.html` — page title, meta description, and the Open Graph tags used
  for link previews. Replace `YOUR_USERNAME` and the placeholder URLs.
- `src/styles/index.css` — all styling. The `:root` block at the top holds the
  colors, fonts and spacing; changing `--accent` restyles the whole site.
- `src/data/sections.ts` — section order and nav labels.

### Adding a project

Append an entry to the `projects` array in `src/data/projects.ts`:

```ts
{
  id: "unique-slug",
  title: "Project name",
  summary: "One line: what it does.",
  tags: ["TypeScript", "React"],
  repo: "https://github.com/you/project",
  demo: "https://you.github.io/project",   // or null
  image: "/projects/project.png",          // optional, from /public
  featured: true,                          // optional, large card
  year: "2025",
}
```

Tags automatically become filter buttons — no other changes needed.

### Screenshots

Drop images in `public/projects/` and reference them as `/projects/<file>`.
Around 1600×1000 works well. Featured cards look best with a real screenshot;
the compact cards don't use images at all.

### Resume

Put `resume.pdf` in `public/` and the Resume button in the header works as-is.
Set `resumeUrl: null` in `profile.ts` to hide the button.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes on every
push to `main`. One-time setup:

1. Push this repo to GitHub.
2. Go to **Settings → Pages**, and under **Source** choose **GitHub Actions**.
3. Push to `main`. The Actions tab shows the deploy; the URL appears there when
   it finishes.

### About the base path

GitHub Pages serves a normal repo from `https://<user>.github.io/<repo>/`, so
the built assets need that path prefix. The workflow detects this automatically:

- Repo named `<user>.github.io` → base is `/`
- Any other repo name → base is `/<repo>/`

If you reference a file from `public/` inside TypeScript, wrap it in the
`asset()` helper from `src/lib/asset.ts` so it picks up the base path. Paths
written directly in `index.html` are handled by Vite.

### Custom domain

Add a `CNAME` file to `public/` containing your domain, configure the DNS
records GitHub asks for, then set `VITE_BASE` to `/` — with a custom domain the
site is served from the root. The simplest way is to edit the workflow's base
step to always output `/`.
